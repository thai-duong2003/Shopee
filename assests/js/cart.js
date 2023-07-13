var removeButtons = document.querySelectorAll(
  ".wrap__item--frame-voucher-product-remove-btn"
);

removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var frameElement = button.closest(".wrap__item--frame");
    frameElement.remove();
  });
});
