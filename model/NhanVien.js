class NhanVien {
  tknv = "";
  name = "";
  email = "";
  password = "";
  datepicker = "";
  luongCB = "";
  chucvu = "";
  gioLam = "";
  tinhTongLuong = function () {
    let tongLuong = 0;
    switch (this.chucvu) {
      case "Sếp":
        tongLuong = this.luongCB * 1 * 3;
        break;
      case "Trưởng phòng":
        tongLuong = this.luongCB * 1 * 2;
        break;
      case "Nhân viên":
        tongLuong = this.luongCB * 1;
        break;
    }
    return tongLuong;
  };
  loaiNhanVien = function () {
    let xepLoai = "";
    switch (true) {
      case this.gioLam >= 192:
        xepLoai = "Xuất sắc";
        break;
      case this.gioLam >= 176:
        xepLoai = "Giỏi";
        break;
      case this.gioLam >= 160:
        xepLoai = "Khá";
        break;
      case this.gioLam < 160:
        xepLoai = "Trung bình";
    }
    return xepLoai;
  };
}
