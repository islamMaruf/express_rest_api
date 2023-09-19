const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

router.post('/success', (req, res) => {
  console.log(req.body)
  res.send({ message: 'success here' })
})

router.post('/cancel', (req, res) => {
  console.log(req.body)
  res.send({ response: 'cancel here' })
})

router.post('/fail', (req, res) => {
  console.log(req.body)
  res.send({ response: 'fail here' })
})

router.get('/ipn', (req, res) => {
  console.log(req.body)
  res.send({ response: 'ipn here' })
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
