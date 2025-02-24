const express = require('express')

const router = express.Router();
router.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

router.use('*', (req, res) => {
  console.log({body: req.body})
  res.send({
    response: {
      data: req.body,     
      message: "Redirect Data"
    }
  })
})


module.exports = router;
