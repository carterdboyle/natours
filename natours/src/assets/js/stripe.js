/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51RIdctQW54DN1XYH7ynKqp1l3SLv6aBmjoZemeFlBwmf9g69Ge6XHXwfh6rLavZs00N4Zeti6masfTq9xKUBoBLl00rFq2MZ13',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout from + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
