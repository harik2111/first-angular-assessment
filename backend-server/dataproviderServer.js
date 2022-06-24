const express = require("express");
var cors = require('cors');

const dataprovider = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3201;

// middleware
dataprovider.use(cors());
dataprovider.use(bodyparser.json());
dataprovider.use(bodyparser.urlencoded({ extended: false }));

dataprovider.listen(port, () => {
  console.log(`running at port ${port}`);
});

const items=[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

dataprovider.post("/item", (req, res) => {
    const item = req.body;
    if(item){
    items.push(item);

      res.status(200).json({
        message: "Item created successfully"
      });
    }
    else{
        res.status(401).json({
            message: "Invalid item Information"
          });
    }
});

dataprovider.get("/items",(req,res)=>{

    res.status(200).json(items);

});