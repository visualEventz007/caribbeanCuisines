//global variable db used
var db;

//calls when we have problem
function errorHandler(transaction, error) 
{
    alert("SQL error: " + error.message);
}


//the DOM is Ready
$(document).ready(function () 
{
    db = openDatabase('caribbeanCuisineDB', '1.0', 'Our Delicacy dataBase', 5 * 1024 * 1024);
    createTables();

    getItems();

    getCart();
    dropCartTable();

});