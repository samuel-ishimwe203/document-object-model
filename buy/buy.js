// buy.js
document.querySelectorAll('.buy').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const productEl = btn.closest('.pro');      // card that owns the button
    const name = productEl.dataset.name;
    const price = Number(productEl.dataset.price);
    const qtyInput = productEl.querySelector('.qty');
    const qty = Number(qtyInput.value) || 1;
    const total = price * qty;

    // build a new row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${document.querySelectorAll('#cart tbody tr').length + 1}</td>
      <td>${name}</td>
      <td>${qty}</td>
      <td>$${price}</td>
      <td>$${total}</td>
      <td><button class="del">x</button></td>
    `;

    // add row to table body
    document.querySelector('#cart tbody').appendChild(tr);

    // optional: clear quantity box
    qtyInput.value = 1;
  });
});

// delegate delete clicks
document.querySelector('#cart tbody').addEventListener('click', e => {
  if (e.target.classList.contains('del')) {
    e.target.closest('tr').remove();
    // re‑number rows
    [...document.querySelectorAll('#cart tbody tr')].forEach((row, i) =>
      row.firstElementChild.textContent = i + 1
    );
  }
});


