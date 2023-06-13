import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    const cart ={name:'Rahim',product:'t-shirt'}
    const total = 3.99
    const price = parseFloat(total.toFixed(2))
    return (
        
        <div>
            <h1>please pay</h1>
          <Elements stripe={stripePromise}> 
          
          <CheckoutForm cart={cart} price={price}></CheckoutForm>

          </Elements>
        </div>
    );
};

export default Payment;