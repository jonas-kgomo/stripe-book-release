import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DemoText from "./components/DemoText";
import CheckoutForm from "./components/CheckoutForm";

import api from "./api";

import "./App.css";

const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

export default function App() {
  return (
    <div className="App">
      <div className="sr-book">
         <img src="/broken.png" alt="book"/>
         
      </div>
      <div className="sr-root">
      
        <div className="sr-main">
        
          
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

        <div className="sr-content">
          <div className="pasha-image-stack">
            <img
              alt=""
              src="https://picsum.photos/280/320?random=1"
              width="140"
              height="160"
            />
            <img
              alt=""
              src="https://picsum.photos/280/320?random=2"
              width="140"
              height="160"
            />
            <img
              alt=""
              src="https://picsum.photos/280/320?random=3"
              width="140"
              height="160"
            />
            <img
              alt=""
              src="https://picsum.photos/280/320?random=4"
              width="140"
              height="160"
            />
          </div>
        </div>
      </div>
      {/* <DemoText /> */}
      <div className="desc"> <b style={{color:'#23123', margin:'24px'}}> The Broken Link </b>
      How the internet is highly dependent on copacetic groups and intermediaries, and
            sometimes serves as a public good
         </div>
    </div>
  );
}
