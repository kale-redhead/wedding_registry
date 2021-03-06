
import React, {useState, useEffect} from 'react'
import {loadStripe} from "@stripe/stripe-js"
import items from './Items'
import axios from 'axios';

// const{STRIPE_PK} = process.env
// console.log(STRIPE_PK)
const stripePromise = loadStripe('pk_test_51J1BoTLh4HlLI7xDe93GSGAXRjoM2ucvWbQPE0iUbgRn0FyhaCVNe3irt38r7k4Z8ZsLrSQtfjGvvNDS1zfw7bze00aNMuGbSX');

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <div className="description">
        <h3>{items.name}</h3>
        <h5>{items.price}</h5>
      </div>
      <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
    </div>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout(props) {
  const {cart} = props
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const session = await axios.post("/create-checkout-session", {cart});

    // const session = await response.json();
    console.log(session)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.data.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return(
    <ProductDisplay handleClick={handleClick} />
  );
}