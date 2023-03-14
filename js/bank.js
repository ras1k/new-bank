document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-field');
    const deposit = parseFloat(depositAmount.value);

    const depo = document.getElementById('deposit-amount');
    const depoAmount = parseFloat(depo.innerText);

    const balance = document.getElementById('balance-amount');
    const balanceAmount = parseFloat(balance.innerText);
    // console.log(balanceAmount);
    // console.log(typeof(depoAmount))
    const sum1 = deposit + depoAmount;
    const sum2 = sum1 + balanceAmount;
    // console.log(sum);

    balance.innerText = sum2;
    depo.innerText = sum1;
    depositAmount.value = '';
});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawAmount.value);

    const withd = document.getElementById('withdraw-amount');
    const withdAmount = parseFloat(withd.innerText);
    const sum1 = withdraw + withdAmount;
    // console.log(withdAmount);
 
    const balance = document.getElementById('balance-amount');
    const balanceAmount = parseFloat(balance.innerText);

    if (sum1 > balanceAmount){
        alert('Imsufficient Balance');
        return;
    }

    const sum2 = balanceAmount - sum1;
    
    balance.innerText = sum2;
    withd.innerText = sum1;
    withdrawAmount.value = '';
})