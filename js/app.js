
//  step-1: 1st function calculator button handaler.

function moneyMosterId(elementId){
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldString =inputFieldElement.value;
    const inputField = parseFloat(inputFieldString);
    return inputField;
}

// step-2 : 2nd fuction save button handelar
 function setValue( previousId,newValue){
    const totalSetElement = document.getElementById(previousId);
    totalSetElement.innerText = newValue;
 }

//  step-3 calculator bottor added some input field.

document.getElementById('btn-calculator').addEventListener('click',function(){
    const incomeFieldElement = moneyMosterId('income-field');
    const foodFieldElement = moneyMosterId('food-field');
    const rentFieldElement = moneyMosterId('rent-field');
    const clothesFieldElement = moneyMosterId('clothes-field');
    const currentTotalCost = foodFieldElement + rentFieldElement+clothesFieldElement;

    const restIncome = incomeFieldElement - currentTotalCost;

//  calculator button some condition added .

    if (incomeFieldElement < currentTotalCost) {
        alert('Please check your total balance ')
    }
    else if (currentTotalCost > 0) {
        setValue('total-expenses', currentTotalCost);
        setValue('total-balance', restIncome);
    }
    else {
        alert('Please fill up the input field !!')
    }

});


document.getElementById('btn-save').addEventListener('click',function(){
    console.log('click check');
    const savingAmountField = moneyMosterId ('saving-field');
    const totalBalanceElement = document.getElementById('total-balance').innerText;
    const totalSaving = totalBalanceElement * savingAmountField / 100;
    const currentSaving = totalBalanceElement - totalSaving;

    if (savingAmountField <= 100) {
        setValue('saving-amount', totalSaving);
        setValue('remaining-balance', currentSaving);
    } else {
        alert("You can't saving more than 100% !!")
    }
})

