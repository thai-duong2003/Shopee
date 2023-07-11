import products from "./sanpham.js";
var products_list = products();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const category_product = $(".home-product__item");
var btn_filter = $$(".home-filter__btn");
// home-product__item

const product_category = (thai) => {
  return thai
    .map((item, index) => {
      return itepro(item);
      /*`
  <div class="col l-2-4 m-3 c-6">
                    <a href="" class="home-product-item">
                      <img src="${
                        item.img
                      }" alt="" class="home-product-item__img"/>
                      <h4 class="home-product-item__name">${item.name}</h4>
                      <div class="home-product-item__price">
                        <span class="home-product-item__price-old" >${
                          item.oldPrice
                        }</span>
                        <span class="home-product-item__price-curent" >${
                          item.newPrice
                        }</span >
                      </div>
                      <div class="home-product-item__action">
                        <span
                          class="home-product-item__like home-product-item__like--liked"
                        >
                          <i
                            class="home-product-item__like-icon-empty fa-regular fa-heart"
                          ></i>
                          <i
                            class="home-product-item__like-icon-fill fa-solid fa-heart"
                          ></i>
                        </span>
                        <div class="home-product-item__rating">
                          <i
                            class="home-product-item__star--gold fa-solid fa-star"
                          ></i>
                          <i
                            class="home-product-item__star--gold fa-solid fa-star"
                          ></i>
                          <i
                            class="home-product-item__star--gold fa-solid fa-star"
                          ></i>
                          <i
                            class="home-product-item__star--gold fa-solid fa-star"
                          ></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">${
                          item.sold
                        }</span>
                      </div>

                      <div class="home-product-item__origin">
                        <span class="home-product-item__brand">Who</span>
                        <span class="home-product-item__origin-name"
                          >${item.address}</span>
                      </div>
                      ${
                        item.favorite
                          ? `<div class="home-product-item__favourite">
                      <i class="fa-solid fa-check"></i>
                      <span>Yêu thích</span>
                    </div>`
                          : ""
                      }
                     
                      <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent"
                          >${item.saleOff}</span
                        >
                        <span class="home-product-item__sale-off-label"
                          >GIẢM</span
                        >
                      </div>
                    </a>
                  </div>
  `*/
    })
    .join("");
};
category_product.innerHTML = product_category(products_list);

function itepro(item) {
  return ` <div class="col l-2-4 m-3 c-6">
  <a href="" class="home-product-item">
    <img src="${item.img}" alt="" class="home-product-item__img"/>
    <h4 class="home-product-item__name">${item.name}</h4>
    <div class="home-product-item__price">
      <span class="home-product-item__price-old" >${item.oldPrice}</span>
      <span class="home-product-item__price-curent" >${item.newPrice}</span >
    </div>
    <div class="home-product-item__action">
      <span
        class="home-product-item__like home-product-item__like--liked"
      >
        <i
          class="home-product-item__like-icon-empty fa-regular fa-heart"
        ></i>
        <i
          class="home-product-item__like-icon-fill fa-solid fa-heart"
        ></i>
      </span>
      <div class="home-product-item__rating">
        <i
          class="home-product-item__star--gold fa-solid fa-star"
        ></i>
        <i
          class="home-product-item__star--gold fa-solid fa-star"
        ></i>
        <i
          class="home-product-item__star--gold fa-solid fa-star"
        ></i>
        <i
          class="home-product-item__star--gold fa-solid fa-star"
        ></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <span class="home-product-item__sold">${item.sold}</span>
    </div>

    <div class="home-product-item__origin">
      <span class="home-product-item__brand">Who</span>
      <span class="home-product-item__origin-name"
        >${item.address}</span>
    </div>
    ${
      item.favorite
        ? `<div class="home-product-item__favourite">
    <i class="fa-solid fa-check"></i>
    <span>Yêu thích</span>
  </div>`
        : ""
    }
   
    <div class="home-product-item__sale-off">
      <span class="home-product-item__sale-off-percent"
        >${item.saleOff}</span
      >
      <span class="home-product-item__sale-off-label"
        >GIẢM</span
      >
    </div>
  </a>
</div>`;
}
// btn--primary
for (let i = 0; i < btn_filter.length; i++) {
  btn_filter[i].onclick = () => {
    $(".home-filter__btn.btn--primary").classList.remove("btn--primary");

    btn_filter[i].classList.add("btn--primary");
    switch (btn_filter[i].innerText) {
      case "Phổ biến":
        {
          const a = products_list.filter((ar) => {
            return ar.phobien;
          });
          category_product.innerHTML = product_category(a);
        }
        break;
      case "Mới nhất":
        {
          category_product.innerHTML = product_category(products_list);
        }
        break;
      case "Bán chạy":
        {
          const a = products_list.filter((ar) => {
            return ar.banchay;
          });
          category_product.innerHTML = product_category(a);
        }
        break;
      default: {
        console.log(123);
      }
    }
  };
}

const a = products_list.filter((ar) => {
  return ar.newPrice;
});
// console.log(a);
products_list.map((item, index) => {
  // console.log(item.newPrice);
});

const costpros = $$(".select-input__item");
for (let i = 0; i < costpros.length; i++) {
  costpros[i].onclick = () => {
    switch (costpros[i].innerText) {
      case "Giá: Thấp đến cao": {
      }
    }
  };
}
