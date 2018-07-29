# bamazon

This is a in depth CLI app and a basic skeleton of an inventory management system for 3 different types of users.
* Customer (bamazonCustomer.js)
* Manager (bamazonManager.js)
* Supervisor(bamazonSupervisor.js)

We will look at the properties of each one to provide an understanding of what each command performs.

To start we input "node [commandName]"

## Customer

First is the Customer, a fairly simple command with not much control of inventory. Since this is a buyer, they simply only have the ability to purchase items from this menu. 

Let's look at each step of this process.

We are first introduced to a menu once the command has been added

![customerMenu](https://i.imgur.com/TDLeQ5z.png)

From here we can choose what to purchasae based on ID. In this example, we will purchase some PS4's, which are under ID 4

The prompy will ask us how many we would like to purchase. If we purchase more than the available stock, we will notified that there is not enough of that item. We will purchase 196 PS4's. It's for charity.


![customerUpdate](https://i.imgur.com/Iq4yi4X.png)

The item has now been updated to show the remaining amount of PS4's available in stock.

So let's focus on the next point.

## Manager

This one has the most options. Let's look at the menu of the Manager

![managerMenu](https://i.imgur.com/pLVxxKQ.png)

Here we have a multitude of options. As any manager would know, it is up to them to check how much inventory is left in their store and purchase the necessary amount to make sure the store does not sell out before new buyers come in. So let's check if anything is low on stock.

![managerLowInventory](https://i.imgur.com/IxYgEXM.png)

Uh oh, it looks like wer are low on MTG Booster Packs. We are also running out of the PS4's after that one customer *ahem* purchased almost ALL of them. Why would they do such a thing?

Fortunately, we are managers. We can rectify this. 

By going back to the initial Menu, we can choose an option to add to our inventory. It's essentially the same means of purchasing something as a customer. You pick the item based on the ID number, but instead, you're adding to the inventory, rather than subtracting. 

In this case, we will add 20 and 30, respectively.

![InventoryUpdate](https://i.imgur.com/6K01p7Q.png)

And Voila. We have a feasable amount of each product to sell to future customers. 

Finally, we have our Supervisor

## Supervisor

Surprisingly, the supervisor does not have as much power over what can happen but holds the power to add brand new departments to the store. When they do this, it adds to the the departments database. They have the power to, not only include new departments, but can provide over head costs to each department. Stressful.

![supervisorTable](https://i.imgur.com/oNr4rRz.png)

## Conclusion

This is, again, a completely usable store, that is easily capable ot plugging into a front end for future use. For now CLI is an incredibly efficient way to provide a quick example of what an in-depth inventory management system could look like.
