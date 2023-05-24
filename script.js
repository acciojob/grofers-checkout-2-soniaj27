//your code here
let tableEl = document.getElementById('myTable');
let priceArr = Array.from(document.querySelectorAll("td[data-ns-test]"));

const prices = document.querySelectorAll('[data-ns-test="price"]');
let totalPrice = 0;
for (const priceOfEachItem of priceArr) {
  totalPrice += Number(priceOfEachItem.textContent);
}

let totalRow = document.createElement('tr');
let newcell = totalRow.insertCell(0);
newcell.textContent = totalPrice
totalRow.setAttribute('data-ns-test', 'grandTotal')

let totalPrice = 0;
for(let i=0; i<prices.length; i++)
	{
		totalPrice+=parseInt(prices[i].innerText);
	}
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
grandTotal.innerText = totalPrice.toString();
tableEl.insertAdjacentElement('beforeend', totalRow);
