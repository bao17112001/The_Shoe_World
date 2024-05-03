const titles = document.querySelectorAll(".products-filter-title");
titles.forEach(title => {
  title.addEventListener("click", function() {
    title.classList.toggle("clicked");
  });
});

const contents = document.querySelectorAll(".products-filter-content");
titles.forEach((title, index) => {
  title.addEventListener("click", function() {
    contents[index].classList.toggle("hidden");
  });
});

const items = document.querySelectorAll(".products-filter-item");
items.forEach(item => {
  item.addEventListener("click", function() {
    const checkbox = item.querySelector(".products-filter-option-box");
    checkbox.checked = !checkbox.checked;
  });
});

const customRange = document.querySelector(".custom-range");
const priceValue = document.querySelector(".priceValue");

customRange.addEventListener("input", function() {
  const currentValue = parseInt(customRange.value);
  const formattedValue = currentValue.toLocaleString("vi-VN");
  priceValue.textContent = formattedValue + " VND";
});

const productItems = document.querySelectorAll(".product-item");
const modalProduct = document.querySelector(".modal-product");

// Hiển thị modal khi click vào sản phẩm
productItems.forEach(function(productItem) {
  productItem.addEventListener("click", function() {
    modalProduct.classList.add("active");
  });
});

// Ẩn modal khi click vào nút đóng modal hoặc click vào nút ngoài modal
modalProduct.addEventListener("click", function(event) {
  if (
    event.target.classList.contains("modal-product-btn") ||
    event.target === modalProduct
  ) {
    modalProduct.classList.remove("active");
  }
});

// quality
const quantityInput = document.querySelector(".quality-input");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");

// Giảm số lượng
minusButton.addEventListener("click", function(event) {
  event.preventDefault();
  const currentValue = parseInt(quantityInput.value);
  const minValue = parseInt(quantityInput.getAttribute("min")) || 1;
  if (currentValue > minValue) {
    quantityInput.value = currentValue - 1;
  }
});

// Tăng số lượng
plusButton.addEventListener("click", function(event) {
  event.preventDefault();
  const currentValue = parseInt(quantityInput.value);
  const maxValue = parseInt(quantityInput.getAttribute("max")) || Infinity;
  if (currentValue < maxValue) {
    quantityInput.value = currentValue + 1;
  }
});
