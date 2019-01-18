//Lunch Bill Part
const dayCount = document.getElementById('officeDay');
const dayBill = document.getElementById('dayBill');
const button = document.getElementById('lunchAdd');
const totalOfficeDay = document.getElementById('totalOfficeDay');
const dayLunchBill = document.getElementById('dayLunchBill');
const lunchBillTotal = document.getElementById('lunchBillTotal');
const totalLunchBill = document.getElementById('totalLunchBill');

const lunchAccount = () => {
    totalOfficeDay.value = dayCount.value;
    dayLunchBill.value = dayBill.value;
    lunchBillTotal.value = +totalOfficeDay.value * dayLunchBill.value;
    totalLunchBill.value = lunchBillTotal.value;

    dayCount.value = '';
    dayBill.value = '';
}

const lunchKeypress = (event) =>{
    if(dayCount.value >0 && dayBill.value >0 && event.keyCode === 13){
        lunchAccount();
     }
}

button.addEventListener('click', lunchAccount);
dayCount.addEventListener("keypress", lunchKeypress);
dayBill.addEventListener("keypress", lunchKeypress);


//Others Bill Part
const addButton = document.getElementById('add');
const dateInput = document.getElementById('date');
const purposeInput = document.getElementById('purpose');
const amountInput = document.getElementById('amount');
const ol = document.querySelector('ol');
const billTotal = document.getElementById('billTotal');
const OtherBillTotal = document.getElementById('totalOtherBill');

const inputLength = () => dateInput.value.length;
const inputLength2 = () => purposeInput.value.trim().length;
const inputLength3 = () => amountInput.value.length;

const listElement = () =>{
    let li = document.createElement('li');
        li.appendChild(document.createTextNode(dateInput.value));
        li.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );
        li.appendChild(document.createTextNode(purposeInput.value));
        li.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );
        li.appendChild( document.createTextNode( '=' ) );
        li.appendChild( document.createTextNode( '\u00A0\u00A0' ) );
        li.appendChild(document.createTextNode(amountInput.value));
        if(amountInput.value > 0 && amountInput.value !== ''){
            billTotal.value = +billTotal.value + +amountInput.value;
        }
        OtherBillTotal.value =  billTotal.value;
        li.appendChild( document.createTextNode( 'Tk' ) );
        ol.appendChild(li);
        dateInput.value = '';
        purposeInput.value = '';
        amountInput.value = '';
}

const addList = () =>{
    	if ( inputLength() && inputLength2() && inputLength3() > 0) {
        listElement();
    }
} 

const listKeypess = (event) =>{
        if(event.keyCode === 13){
        addList();
     }
}

addButton.addEventListener('click', addList);
dateInput.addEventListener('keypress', listKeypess);
purposeInput.addEventListener('keypress', listKeypess);
amountInput.addEventListener('keypress', listKeypess);

// Total Salary Accounting Part

const salary = document.getElementById('salary');
const dueSalary = document.getElementById('dueSalary');
const paybleSalary = document.getElementById('paybleSalary');
const totalSalaryButton = document.getElementById('totalSalary');
const givenSalary = document.getElementById('given');
const dueForNext = document.getElementById('dueForNext');
const currentDeuSalary = document.getElementById('currentDeuSalary');


const totalSalary = () => paybleSalary.value = +totalLunchBill.value + +OtherBillTotal.value + +salary.value + +dueSalary.value;
const dueSalaryForNext = () => dueForNext.value = +paybleSalary.value - +givenSalary.value;

const SalaryKeypess = (event) =>{
    if(event.keyCode === 13){
        totalSalary();
    }
}

const dueSalaryKeypress = (event) =>{
    if (event.keyCode === 13) {
        dueSalaryForNext();
    }
}

totalSalaryButton.addEventListener('click', totalSalary);
salary.addEventListener('keypress', SalaryKeypess);
dueSalary.addEventListener('keypress', SalaryKeypess);
currentDeuSalary.addEventListener('click', dueSalaryForNext);
givenSalary.addEventListener('keypress', dueSalaryKeypress);


//print page

const printPage = document.getElementById('print');

const pagePrint = () => window.print();

printPage.addEventListener('click', pagePrint);