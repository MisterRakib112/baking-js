document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input')
    const newDepositeText = depositInput.value;
    const newDeposit = document.getElementById('deposit-amount');
    const currentDepositAmount = newDeposit.innerText;
    const depositTotal = parseFloat (currentDepositAmount) + parseFloat (newDepositeText);
    console.log(depositTotal)
    newDeposit.innerText = depositTotal;
    depositInput.value = '';
    
})