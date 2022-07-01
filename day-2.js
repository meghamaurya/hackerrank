/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    var mealCost = 2 * meal_cost;
    var tip = meal_cost * tip_percent / 100;
    var tax = meal_cost * tax_percent / 100;
    var total_cost = Math.round(meal_cost + tip + tax);
    console.log(total_cost);
}
