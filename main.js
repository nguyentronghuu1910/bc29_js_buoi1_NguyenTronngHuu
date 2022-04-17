// Bài tập 1:
/**
 * - Đầu vào :
 *   + lương 1 ngày làm : 100.000vnđ;
 * 
 * - Xử lý :
 *   + Nhập số ngày làm ;
 *   + Lương nhân viên = lương 1 ngày * số ngày làm
 * 
 * - Đầu ra :
 *   + Tiền lương nhân viên
 */

var soNgayLam = 24 ;
var luongNgay = 100000 ;
var luongNv = soNgayLam * luongNgay ;

var currentFormat = new Intl.NumberFormat("vn-VN");
var ketQua = "Tiền lương nhân viên nhận được là : " + currentFormat.format(luongNv) ;
console.log(ketQua);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
/**
 * - Đầu vào :
 *   + Nhập 5 số thực : (a, b, c, d, e) ;
 * 
 * - Xử lý :
 *   + Tính trung bình của 5 số = (a + b + c + d + e) / 5 ;
 * 
 * - Đầu ra :
 *   + giaTri_TB 
 */

var a = 5 ;
var b = 6 ;
var c = 7 ;
var d = 8 ;
var e = 9 ;
var giaTri_TB = (a + b + c + d + e) / 5 ;

 console.log("Giá trị trung bình của 5 số là : " + giaTri_TB);


 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 // Bài tập 3:
 /**
  * - Đầu vào :
  *   + Giá USD sang VNĐ : 23.500vnđ ;
  *   + Nhập số tiền USD ;
  * 
  * - Xử lý :
  *   + Quy đổi số tiền USD sang VNĐ = Giá USD * 23.500 ;
  * 
  * - Đầu ra :
  *   + Giá quy đổi từ USD sang VNĐ ;
  */

 var giaUsd = 5 ;
 var giaVnd = 23500 ;
 var giaQuyDoi = giaUsd * giaVnd ;

 var currentFormat = new Intl.NumberFormat("vn-VN");
 var raTien = "Giá quy đổi từ USD sang VNĐ : " + currentFormat.format(giaQuyDoi);
 console.log(raTien);


 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 // Bài tập 4:
 /**
  * - Đầu vào :
  *   + Nhập vô số chiều dài ;
  *   + Nhập vô số chiều rộng ;
  * 
  * - Xử lý :
  *   + Diện tích = chiều Dài * chiều Rộng ;
  *   + Chu vi = (chiều Dài + chiều Rộng) * 2 ;
  * 
  * - Đầu ra :
  *   + Tính & xuất ra diện tích, chu vi của hình chữ nhật ;
  *  
  */

 var chieuDai = 20 ;
 var chieuRong = 17 ;  
 var dienTich = chieuDai * chieuRong ;
 var chuVi = ( chieuDai + chieuRong ) * 2 ;

 console.log("Diện tích hình chữ nhật là : " + dienTich) ;
 console.log("Chu vi hình chữ nhật là : " + chuVi);


 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 // Bài tập 5:
 /**
  * - Đầu vào :
  *   + Nhập một số có 2 chữ số bất kỳ ;
  *   
  * - Xử lý :
  *   + tách hàng đơn vị và hàng chục cả số ;
  *   + lấy 2 số tách được cộng lại ;
  * 
  * - Đầu ra :
  *   + Tính tổng ;
  */

 var number = 22 ;

 var numberDv = number % 10 ;
 numberDv = parseInt(numberDv)

 var numberChuc = number / 10 ;
 numberChuc = parseInt(numberChuc) ;
 var numberTong = numberDv + numberChuc ;

 console.log("Tổng 2 ký số là : " + numberTong);

 