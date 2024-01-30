
const { Router } = require("express");
const router = Router();

product = [
    {
        id: 1,
        name: "shirt",
        price: 1200
    },
    {
        id: 2,
        name: "T-shirt",
        price: 1000
    },
    {
        id: 3,
        name: "pant",
        price: 900
    },
    {
        id: 4,
        name: "cap",
        price: 800
    }
];

router.get('/',(req,res) => {
    res.send(product);
});

module.express = router