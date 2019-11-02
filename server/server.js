const path = require('path');
const express = require('express');
require('./db/mongoose')


const paymentRouter=require('./routers/paymentRouter')
const transferRouter=require('./routers/transferRouter')
const rechargeRouter=require('./routers/rechargeRouter')
const userRouter=require('./routers/user')
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT 
app.use(express.static(publicPath));
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(paymentRouter)
app.use(transferRouter)
app.use(rechargeRouter)
app.use(userRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!' + port);
});


module.exports = app 