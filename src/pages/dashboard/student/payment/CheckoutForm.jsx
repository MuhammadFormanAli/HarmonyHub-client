import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import './checkoutForm.css'
import Swal from "sweetalert2";


const CheckoutForm = ({ price, courseDetails }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod( {
                type: 'card',
                card
            })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }

        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },

                },
            },
        )

        if (confirmError) {
            console.log('confirmError', confirmError)
        }
        console.log('paymentIntent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user?.email,
                transitionId: paymentIntent.id,
                price,
                date: new Date(),
                courseDetails,
            }

            axiosSecure.post('payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                        Swal.fire('Payment Successful')
                    }
                })
        }

    }


    return (
        <div className="w-[450px] my-8 ">
            <h1 className="text-xl text-cyan-900 font-bold pl-2 underline">PLEASE PAY</h1>
            <div className="border-4">
                <form className='m-5' onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-info btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
            </div>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

        </div>
    );
};

export default CheckoutForm;