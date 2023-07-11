// search
import products from "./sanpham.js";
var products_list = products();
import { product_category, itepro } from "./handleproduct.js";

var input, li, a, i, textvlu, fillter;
input = document.querySelector(".header__search-input");
export function search() {
  fillter = input.value.toUpperCase();
  li = document.querySelectorAll(".home-product__item .col.l-2-4");

  for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textvlu = a.textContent || a.innerText;
    if (textvlu.toUpperCase().indexOf(fillter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
const saveloco = "SAVE_value";

var config = JSON.parse(localStorage.getItem(saveloco)) || {};

var setconfig = (key, value) => {
  config[key] = value;
  localStorage.setItem(saveloco, JSON.stringify(config)); //lưu vào localStorage: bộ nhớ cục bộ
};
let valueinput;

document.querySelector(".header__search-btn").onclick = () => {
  setconfig("searchvalue", input.value); //gọi hàm, truyền gt để lấy dl lưu vào bộ nhớ
  window.location = "/category.html";
};
document.querySelector(".header__search-input").onkeyup = (e) => {
  if (e.which === 13) {
    setconfig("searchvalue", input.value); //gọi hàm, truyền gt để lấy dl lưu vào bộ nhớ
    window.location = "/category.html";
    document.querySelector(".header__search-history").style.display = "none";
  }
};

const historysearch = document.querySelectorAll(
  ".header__search-history-item a"
);
historysearch.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
    document
      .querySelector(".header__search-history")
      .classList.remove("active");
    window.location = "category.html";
    setconfig("searchvalue", item.textContent); //gọi hàm, truyền gt để lấy dl lưu vào bộ nhớ
  };
});

const category_product = document.querySelector(".home-product__item");
const category_nav = document.querySelectorAll(".category-item");

category_nav.forEach((item) => {
  item.onclick = (e) => {
    setconfig("searchvalue", item.ariaValueText);
    e.preventDefault();
    document
      .querySelector(".category-item.category-item--active")
      .classList.remove("category-item--active");

    item.classList.add("category-item--active");
    if (item.ariaValueText === "") {
      category_product.innerHTML = product_category(products_list);
      document.querySelector(".category-list-pro").location.reload();
    }
    window.onload();
  };
});
if (document.querySelector(".category_page")) {
  window.onload = () => {
    if (config.searchvalue) {
      input.value = config.searchvalue;
      search();
    } else {
      search();
    }
  };
}
