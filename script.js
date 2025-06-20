// Order confirmation
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const customer = this.customer.value;
  const product = this.product.value;
  const qty = this.quantity.value;
  alert(`အော်ဒါအတည်ပြုပြီးပါပြီ:\nအမည်: ${customer}\nထုတ်ကုန်: ${product}\nအရေအတွက်: ${qty}`);
  this.reset();
});

// Record system
document.getElementById('recordForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value;
  const date = this.date.value;
  const qty = this.qty.value;

  const li = document.createElement('li');
  li.textContent = `အမည်: ${name} | ရက်စွဲ: ${date} | အော်ဒါအရေအတွက်: ${qty}`;
  document.querySelector('#recordList ul').appendChild(li);

  this.reset();
});
