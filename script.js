const TYPE = document.querySelector('#expense-types');
const DATE = document.querySelector('#expense-date');
const NAME = document.querySelector('#expense-name');
const AMOUNT = document.querySelector('#expense-amount');
const ADD_EXPENSE_BTN = document.querySelector('#add-expense');
const EXPENSES_TABLE = document.querySelector('.expense-table');
const EXPENSES_TABLE_Body = document.querySelector('.expense-table-body');
const FRAGMENT = document.createDocumentFragment();

DATE.valueAsDate = new Date()



const createExpenseRow = (type, name, date, amount) => {
  let row = document.createElement('tr');
  row.classList.add('expense-table-body-row');
  let typeElement = document.createElement('td');
  typeElement.innerHTML = type;
  row.append(typeElement);
  let nameElement = document.createElement('td');
  nameElement.innerHTML = name;
  row.append(nameElement);
  let dateElement = document.createElement('td');
  dateElement.innerHTML = date;
  row.append(dateElement);
  let amountElement = document.createElement('td');
  amountElement.innerHTML = '$' + amount;
  row.append(amountElement);
  let deleteElement = document.createElement('td');
  deleteElement.setAttribute('onClick', 'deleteExpense(this.parentElement)');
  deleteElement.classList.add('delete-expense-btn');
  deleteElement.innerHTML = '❌';
  row.append(deleteElement);
  FRAGMENT.append(row);
};

const deleteExpense = (element) => {
  EXPENSES_TABLE_Body.removeChild(element);
};

ADD_EXPENSE_BTN.addEventListener('click', (e) => {
  e.preventDefault();
  if (NAME.value === '' || AMOUNT.value === '') {
    alert('Please enter a valid Name and Amount!')
  } else {
    createExpenseRow(TYPE.value, DATE.value, NAME.value, AMOUNT.value);
    EXPENSES_TABLE_Body.append(FRAGMENT);
  }
});
