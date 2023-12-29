const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

router.post('/ipn', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: "Payment IPN send successfully"
    }
  })
})

router.post('/status/success', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: 'Payment success'
    }
  })
})

router.post('/status/cancel', (req, res) => {
  console.log(req.body)
  res.send({
    response: {
      data: req.body,
      message: 'Payment cancel'
    }
  })
})

router.post('/status/fail', (req, res) => {
  res.send({
    response: {
      data: req.body,
      message: 'Payment failure'
    }
  })
})

module.exports = router;
