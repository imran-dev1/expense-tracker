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

   /* -------Total Balance------ */
   const previousBalance = getValue('total-balance');
   const newBalance = incomeValue - newTotalExpense;
   const updateBalanceTotal = parseFloat(previousBalance.innerText) + newBalance;
   previousBalance.innerText = updateBalanceTotal;

   /* -------Saving Handler------ */
   
   getValue('save-btn').addEventListener('click', function () {

   /* -------Saving Amount------ */
      const saveField = getValue('save-field');
      const savingAmount = incomeValue * parseFloat(saveField.value) / 100;
      
      const previousSavingAmount = getValue('saving-amount');
      const updateSavingAmount = parseFloat(previousSavingAmount.innerText) + savingAmount;

      previousSavingAmount.innerText = updateSavingAmount;
      saveField.value = '';

      /* -------Remaining Balance------ */
      const remainingField = getValue('remaining-balance');
      remainingField.innerText = updateBalanceTotal - updateSavingAmount;


   })



})