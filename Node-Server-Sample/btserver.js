var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

var braintree = require('braintree');

var gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: "xxx",
	publicKey: "xxx",
	privateKey: "xxx"
});

app.get("/client_token", function (req, res) {
	gateway.clientToken.generate({}, function (err, response) {
		console.log("Client Token generated and sent");
		res.send(response);
	});
});

app.post("/purchases", function (req, res) {
	var nonce = req.body.payment_method_nonce;
	
	// Use payment method nonce here
	gateway.transaction.sale({
  		amount: "10.00",
  		paymentMethodNonce: nonce,
	}, function (err, result) {
		console.log("purchase result: " + result.success);
		res.send();
	});
});

app.listen(3000);
console.log('listening on port 3000...');