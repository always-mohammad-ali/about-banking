document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById("deposit-input");
    newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat( previousDepositAmount) + parseFloat (newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    depositInput.value = '';


    //balance Total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = '';

    //AGAIN update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    

    const newBalanceTotal = previousBalanceText - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

})