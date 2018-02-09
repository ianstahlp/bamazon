var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "program123",
    database: "bamazon"
});

connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log("Item \t Product \t Depeartment \t price \n stock_quantitiy");
    console.log("-----------------");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].itemID + "  " + res[i].product_name + "\t " + res[i].department_name + " \t " + res[i].price + " \t " + res[i].stock_quantitiy);

    }
    console.log("-----------------");
})

inquirer.prompt([{
name: "product",
message: "What product would you like to buy? [quit with q]"
}]).then(function(theProduct) {

if (theProduct.product.toUppperCase() == "Q") {
    connection.end();
} else {
    inquirer.prompt([{
        name: "Quantity",
        message: "How many would you like to buy?"
    }]).then(function(theQuantity) {
        console.log(theProduct.product);

        connection.query("SELECT * FROM products WHERE ?", { product_name: theProduct.product }, function(err, res) {
            if (err) throw err;


            if (res[0].stock_quantitiy > theQuantity.Quantity) {

                var cost = res[0].price * theQuantity.Quantity

                console.log('-------------------------------');
                console.log("Your order has been placed! \nThe Total cost is $" + cost.toFixed(2) + "\nThank you!")
                var newQuantity = res[0].stock_quantitiy - theQuantity.Quantity;
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantitiy: newQuantity
                }, {
                    product_name: theProduct.product
                }], function(err, res) {});
            } else {

                console.log("-------------------------------");
                console.log("Sorry, we do not have enough in stock. \nWe only have " + res[0].stock_quantitiy + " units of " + theProduct.product + "\nPlease rety your oder. \nThank you!");
            }

        })


    })


}
});
