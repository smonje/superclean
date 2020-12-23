let buys = document.getElementById('tbl-buys');
let cboxAll = buys.querySelector('thead input[type="checkbox"]');
let cboxes = buys.querySelectorAll('tbody input[type="checkbox"]');
let totalOutput = document.getElementById('total');
let total = 0;

[].forEach.call(cboxes, function (cbox) {
  cbox.addEventListener('change', handleRowSelect);
});

cboxAll.addEventListener('change', function () {
  [].forEach.call(cboxes, function (cbox) {
    //cbox.checked = cboxAll.checked;
    cbox.click();
  });
});

function handleRowSelect (e) {
  let row = e.target.parentNode.parentNode;
  let qty = row.querySelector('td:nth-child(3)').textContent;
  let price = row.querySelector('td:nth-child(4)').textContent;
  let cost = Number(qty) * Number(price);
  
  if (e.target.checked) {
    total += cost;
  } else {
    total -= cost;
  }
  
  total = Number(total.toFixed(2));
  totalOutput.value = total*1.19;
}