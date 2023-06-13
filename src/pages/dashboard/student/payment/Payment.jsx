import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";
import { useParams } from "react-router-dom";
import useCarts from "../../../../hooks/useCarts";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    const cartId = useParams().id
    // console.log(id)

    const [cart] = useCarts()
    const item = cart.find(element => element?._id == cartId)

    const courseDetails = {
        classId: item?.courseId,
        className: item?.className,
        instructorName: item?.instructorName,
        price: item?.price
    }
    // console.log(item)

    const price = parseFloat(item?.price.toFixed(2))
    console.log(price)



    return (
        <div className=" flex justify-center items-center flex-col  mt-8 shadow-lg bg-slate-200 rounded-md p-8">
            
            <Elements stripe={stripePromise}>
                <CheckoutForm courseDetails={courseDetails} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;