const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

router.post('/payments/ipn', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: "Payment IPN send successfully"
    }
  })
})

router.post('/payments/success', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: 'Payment success'
    }
  })
})

router.post('/payments/cancelled', (req, res) => {
  console.log(req.body)
  res.send({
    response: {
      data: req.body,
      message: 'Payment cancel'
    }
  })
})

router.post('/payments/failure', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: 'Payment failure'
    }
  })
})

module.exports = router;
