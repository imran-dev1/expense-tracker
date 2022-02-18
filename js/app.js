function getValue(id) {
   const field = document.getElementById(id);
   return field;
}
const income = getValue('income-field');
const food = getValue('food-field');
const rent = getValue('rent-field');
const clothes = getValue('clothes-field');

// Error Handeling
const incomeError = getValue("income-error");
const expenseError = getValue("expense-error");
const saveError = getValue("save-error");

document.getElementById('calculate-btn').addEventListener('click', function () {
   if (isNaN(income.value) || income.value < 1) {
      expenseError.innerText = '';
      incomeError.innerText = "Error: Please add a valid income amount.";
   } else if (
      isNaN(food.value) ||
      food.value < 0 ||
      food.value == "" ||
      isNaN(rent.value) ||
      rent.value < 0 ||
      rent.value == "" ||
      isNaN(clothes.value) ||
      clothes.value < 0 ||
      clothes.value == ""
   ) {
      incomeError.innerText = '';
      expenseError.innerText = "Error: Please add a valid expense amount.";
   } else {
      incomeError.innerText = "";
      expenseError.innerText = "";

      /* -------Total Expenses------ */
      const newTotalExpense = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
      if (newTotalExpense > income.value) {
         expenseError.innerText = 'Error: Expenses are more than your income.'
      } else {
         const previousExpense = getValue('total-expenses');
         const updateExpense = parseFloat(previousExpense.innerText) + newTotalExpense;
         previousExpense.innerText = updateExpense;
         food.value = '';
         rent.value = '';
         clothes.value = '';

         /* -------Total Balance------ */
         const previousBalance = getValue('total-balance');
         const newBalance = parseFloat(income.value) - newTotalExpense;
         const updateBalanceTotal = parseFloat(previousBalance.innerText) + newBalance;
         previousBalance.innerText = updateBalanceTotal;
      }
      

   }

})
/* -------Saving Handler------ */
const totalBalance = getValue('total-balance');

document.getElementById('save-btn').addEventListener('click', function () {
   
   /* -------Saving Amount------ */
   const saveField = getValue('save-field');
   const saveFieldValue = saveField.value;
   saveField.value = '';
   if (isNaN(saveFieldValue) || saveFieldValue < 0) {
      saveError.innerText = "Error: Please add a valid number";
   } else {
      const newSavingAmount = (income.value * saveFieldValue) / 100;
      if (newSavingAmount > totalBalance.innerText) {
         saveError.innerText = 'Error: You do not have enough amount to save.';
      } else {
         saveError.innerText = '';
         const savingAmountField = getValue('saving-amount');
         savingAmountField.innerText = parseFloat(savingAmountField.innerText) + newSavingAmount;

         /* -------Remaining Balance------ */
         const remainingBalance = getValue('remaining-balance');
         remainingBalance.innerText = totalBalance.innerText - savingAmountField.innerText;
   
         income.value = '';
      }
   
   }
   
});