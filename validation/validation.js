function validateForm() {
  // Lấy giá trị từ form
  const tknv = document.getElementById("tknv").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const datepicker = document.getElementById("datepicker").value.trim();
  const luongCB = parseFloat(document.getElementById("luongCB").value.trim());
  const chucvu = document.getElementById("chucvu").value.trim();
  const gioLam = parseInt(document.getElementById("gioLam").value.trim());

  let isValid = true;
  let errors = [];

  // Kiểm tra tài khoản
  if (!tknv || tknv.length < 4 || tknv.length > 6 || isNaN(tknv)) {
    isValid = false;
    errors.push("Tài khoản phải từ 4 đến 6 ký số, không để trống.");
  }

  // Kiểm tra tên nhân viên
  if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
    isValid = false;
    errors.push("Tên nhân viên phải là chữ, không để trống.");
  }

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    isValid = false;
    errors.push("Email không đúng định dạng, không để trống.");
  }

  // Kiểm tra mật khẩu
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,10}$/;
  if (!password || !passwordRegex.test(password)) {
    isValid = false;
    errors.push(
      "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống."
    );
  }

  // Kiểm tra ngày làm
  if (!datepicker) {
    isValid = false;
    errors.push("Ngày làm không để trống, định dạng mm/dd/yyyy.");
  }

  // Kiểm tra lương cơ bản
  if (isNaN(luongCB) || luongCB < 1000000 || luongCB > 20000000) {
    isValid = false;
    errors.push(
      "Lương cơ bản phải từ 1.000.000 đến 20.000.000, không để trống."
    );
  }

  // Kiểm tra chức vụ
  const validChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
  if (!validChucVu.includes(chucvu)) {
    isValid = false;
    errors.push(
      "Chức vụ phải chọn chức vụ hợp lệ (Sếp, Trưởng Phòng, Nhân Viên)."
    );
  }

  // Kiểm tra số giờ làm
  if (isNaN(gioLam) || gioLam < 80 || gioLam > 200) {
    isValid = false;
    errors.push(
      "Số giờ làm trong tháng phải từ 80 đến 200 giờ, không để trống."
    );
  }

  // Hiển thị lỗi nếu có
  if (!isValid) {
    alert(errors.join("\n"));
  }

  return isValid;
}
