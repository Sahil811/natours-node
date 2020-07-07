/*eslint-disable*/
const axios = require('axios');
const stripe = Stripe(
  'pk_test_51H1ZAEFdme2uT4qpsEGj1SyWJVDBShBZGykOgqshj8tyT6Xa5wdzMLiiqE81dKc7Esd9uvvSLsRS6A69dGAjRzri0001DngVZ0'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    //console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
