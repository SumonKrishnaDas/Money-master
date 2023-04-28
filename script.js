document.getElementById('Calculate').addEventListener('click',calculate);


function getPut(elementId){

const foodField =document.getElementById(elementId);
const foodFieldString= foodField.value;
const currentAmount = parseFloat(foodFieldString);
return currentAmount;


}


function calculate(){



const income = getPut('income-field');
const food = getPut('food-field');

const rent = getPut('Rent-field');

const clothes=getPut('text-clothes');

const expense = food+rent+clothes;
const balance =income-expense

const Expense= document.getElementById('Expenses');

Expense.innerText=expense;
const Balance=document.getElementById('Balance');
Balance.innerText=balance;


}

document.getElementById('save_button').addEventListener('click',save);

function save(){
    const income = getPut('income-field');
    food = getPut('food-field');

    const rent = getPut('Rent-field');
    
    const clothes=getPut('text-clothes');
    
    const expense = food+rent+clothes;
    const balance =income-expense
    


const saveField =getPut('save');
const percent = balance*saveField/100;
const savAmount=document.getElementById('saving_amount');
savAmount.innerText=percent;
const remainBalance=balance-percent;
const RemainBalance= document.getElementById('remain');
RemainBalance.innerText=remainBalance;







}