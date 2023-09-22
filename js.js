
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
   
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 2000);
};


/* -----------------------------------đưa sản phẩm vào giỏ hàng-----------------------------*/
// function chuyenDanhSachDoiTuongThanhHTML(danhsachSanPham){
//   var HTMLDanhSachPham ='<div class="item">';
//   for ( var i = 0 ; i< danhsachSanPham.length; i++){
//     var sanpham = danhsachSanPham[i];
//   var htmlsanpham = chuyenDanhSachDoiTuongThanhHTML(sanpham);
//   HTMLDanhSachSanPham = HTMLDanhSachPham +htmlsanphaml;
//   }
//   HTMLDanhSachPham = HTMLDanhSachPham + '</div>';
//   return HTMLDanhSachPham;
// }
// function chuyenDoiTuongSanPhamThanhHTML(sanpham){
//   var html = '';
//   return html;
// }