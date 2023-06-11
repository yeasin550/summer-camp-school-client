/* eslint-disable no-unused-vars */
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import useCart from "../../../hooks/useCart";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//   const [cart] = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   const price = parseFloat(total.toFixed(2));

//   return (
//     <div>
     

//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price} cart={cart}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;





import React from 'react';

const Payment = () => {
    return (
        <div>
            <h1>payment method</h1>
        </div>
    );
};

export default Payment;
