//get id
function getElement(param){
    return document.getElementById(param);
}
//text to num
function textToNumber(param){
    return  parseInt(param);
}
// input add / minus
function PlusMinusTotalFunction(product, isADD,price){
    const getNumberText = getElement(product+'number');
    let getNumber = textToNumber(getNumberText.value);
    if( isADD == true){
         getNumber = getNumber + 1;  
    }
    else if(getNumber > 0){
         getNumber = getNumber - 1;  
    }
    getNumberText.value = getNumber;
    // // update total
    const total = getElement(product+"total");
    total.innerText = getNumber * price;
    //calculate total
    calculateTotal();
}
 function getInputValue(product){
     const productInput = getElement(product+"number").value;
     const  productNumber = parseInt(productInput);
     return productNumber;
 }
 function calculateTotal(){
     const phoneTotal = getInputValue('phone-') * 1219;
     const caseTotal = getInputValue('case-') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal/10;
     const totalPrice = subTotal + tax;
     //update on the html
     getElement('sub-total').innerText = subTotal;
     getElement('tax-amount').innerText = tax;
     getElement('total-price').innerText = totalPrice;
 }

//phone plus btn
const phonePlusBtn = getElement("phone-plus");
phonePlusBtn.addEventListener('click', function(){
PlusMinusTotalFunction("phone-", true, 1219);
});
//phone minus btn
const phoneMinusBtn = getElement("phone-minus");
phoneMinusBtn.addEventListener('click', function(){
PlusMinusTotalFunction("phone-", false,1219);
});
//case plus btn
const casePlusBtn = getElement("case-plus");
casePlusBtn.addEventListener('click', function(){
PlusMinusTotalFunction("case-", true,59);
});
//case minus btn
const caseMinusBtn = getElement("case-minus");
caseMinusBtn.addEventListener('click', function(){
PlusMinusTotalFunction("case-", false, 59);
});