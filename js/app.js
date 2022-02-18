function getValue(id) {
   const field = document.getElementById(id);
   return field;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
   const income = getValue('income-field');
   const incomeValue = parseFloat(income.value);
   const food = getValue('food-field');
   const rent = getValue('rent-field');
   const clothes = getValue('clothes-field');

   /* -------Total Expenses------ */
   const newTotalExpense = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
   const previousExpense = getValue('total-expenses');
   const updateExpense = parseFloat(previousExpense.innerText) + newTotalExpense;
   previousExpense.innerText = updateExpense;
   income.value = '';
   food.value = '';
   rent.value = '';
   clothes.value = '';

   



})