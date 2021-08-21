document.getElementById('deposite-button').addEventListener('click',function(){
    //deposite
    const depositeInput = document.getElementById('deposite-input')
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    
    const depositTotal = document.getElementById('deposite-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositeAmount;
    depositTotal.innerText = newDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = newDepositeAmount + previousBalanceTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    depositeInput.value = '';
})

//handle withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    console.log(newWithdrawTotal)
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText =balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

    
})