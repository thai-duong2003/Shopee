function product() {
  const product = [
    {
      loaihang: "Thời Trang Nam",
      productItem: [
        {
          id: 1,
          name: "ÁO THUN NAM NGẮN TAY CỔ BẺ MẪU MỚI NHIỀU MÀU",
          favourite: true,
          deal: true,
          special: false,
          oldPrice: "120.000",
          newPrice: "79.000",
          star: 5,
          sold: "85,7K",
          address: "Hà Nội",
          saleOff: "34%",
          ratings: "22,9",
          shippingFee: "₫14.000 - ₫22.000", //&#8363; = ₫
          classify: [
            " XÁM XANH",
            "ĐEN",
            "TRẮNG",
            "XÁM GHI",
            "XANH ĐEN ",
            "XÁM XI MĂNG",
          ],
          size: ["M", "L", "XL", "XXL"],
          available: 1988,
          like: "6,4K",
          img: [
            "/clothes/1_1.jpg",
            "/clothes/1_2.jpg",
            "/clothes/1_3.jpg",
            "/clothes/1_4.jpg",
            "/clothes/1_5.jpg",
            "/clothes/1_6.jpg",
          ],
        },
        {
          id: 2,
          name: "Quần thể thao nam cao cấp chất mềm mịn ko nhăn nhiều màu",
          favourite: false,
          deal: false,
          special: true,
          oldPrice: "",
          newPrice: "89.000",
          star: 4,
          sold: "16,7K",
          address: "Hà Nội",
          saleOff: "",
          ratings: "3k",
          shippingFee: "₫13.000 - ₫16.000",
          classify: ["XÁM", "ĐEN", "THAN"],
          size: ["M", "L", "XL", "XXL"],
          available: 719,
          like: "1,4K",
          img: [
            "/clothes/2_1.jpg",
            "/clothes/2_2.jpg",
            "/clothes/2_3.jpg",
            "/clothes/2_4.jpg",
            "/clothes/2_5.jpg",
          ],
        },
      ],
    },
  ];
  return product;
}
export default product;
