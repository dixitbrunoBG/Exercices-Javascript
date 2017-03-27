/*
Now that we have the pizza orders, you want to add them up to
find the cost of the pizzas for the check.
Let's imagine that each pizza is $7.50,
no matter the topping and crust type.

We will need to do three things to write this in JavaScript:
-Create a variable to hold the number of pizzas ordered.
-Whenever a pizza is ordered, add one to the number of pizzas ordered.
-Take the total number of pizzas and multiply them by 7,
since each pizza is $7.50.
-A sales tax of 6% needs to be calculated for every full order.
This should be based on the subtotal.
-The total, which is the subtotal plus tax, should also be computed.
*/

//Variable du nb de pizzas commandées
var orderCount = 0 ;

//Fonction de garniture de la pizza et de calcul du nb de pizzas
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount = orderCount + 1;
}

//Fonction de calcul de l'addition avec un prix de 7.5e
function getSubTotal(itemCount) {
  return  itemCount * 7.5;
}

//Fonction de calcul du montant de taxes sur le sous-total
function getTax() {
  return  getSubTotal(orderCount) * 0.06;
}

//Fonction de calcul du sous-total + montant des taxes
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

//Appels des fonctions de commandes des pizzas et choix de garnitures
takeOrder('bacon', 'large crust');
takeOrder('mushrooms', 'thin crust');
takeOrder('chorizo', 'cheezy crust');

//Affichage du sous-total HT de l'addition
console.log(getSubTotal(orderCount));

//Affichage du total TTC de l'addition
console.log(getTotal());
