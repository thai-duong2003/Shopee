var removeButtons = document.querySelectorAll(
  ".wrap__item--frame-voucher-product-remove-btn"
);

removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var frameElement = button.closest(".wrap__item--frame");
    frameElement.remove();
  });
});

const checkboxInputs = document.querySelectorAll('.checkbox_input');
const totalPriceElement = document.querySelector('.wrap__footer-info-above-price');

checkboxInputs.forEach(function(checkboxInput) {
    checkboxInput.addEventListener('change', function() {
        const quantityElement = this.closest('.wrap__item--frame').querySelector('.wrap__item--frame-voucher-product-number');
        const quantity = parseInt(quantityElement.value);
        const priceElement = this.closest('.wrap__item--frame').querySelector('.wrap__item--frame-voucher-product-price-new');
        const price = parseFloat(priceElement.textContent.replace('đ', '').trim());
        const currentPrice = parseFloat(totalPriceElement.textContent.replace('đ', '').trim());

        
        if (this.checked) {
            const newPrice = currentPrice + (price * quantity);
            totalPriceElement.textContent = 'đ' + newPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -1);
        } else {
            const newPrice = currentPrice - (price * quantity);
            totalPriceElement.textContent = 'đ' + newPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -1);
        }
    });
});
