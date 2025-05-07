/* eslint-disable */
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import { API_URL } from '../config';

export const bookTour = async (tourId) => {
  const stripe = await loadStripe(
    'pk_test_51RIdctQW54DN1XYH7ynKqp1l3SLv6aBmjoZemeFlBwmf9g69Ge6XHXwfh6rLavZs00N4Zeti6masfTq9xKUBoBLl00rFq2MZ13'
  );

  try {
    // 1) Get checkout session from API
    const data = await fetch(`${API_URL}bookings/checkout-session/${tourId}`, {
      credentials: 'include',
    });
    const { session } = await data.json();
    console.log(session);
    // 2) Create checkout from + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (err) {
    console.log(err);
    toast('error', err.message);
  }
};
