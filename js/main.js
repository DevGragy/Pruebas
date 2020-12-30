//Variables
let precio1 = "32.69";

paypal_sdk
    .Buttons({
        style: {
            color: "black",
            size: "responsive",
        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            currency: "MXN",
                            value: precio1,
                        },
                    },
                ],
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert(
                    "Transaction completed by " + details.payer.name.given_name
                );
            });
        },
    })
    .render("#paypal");
