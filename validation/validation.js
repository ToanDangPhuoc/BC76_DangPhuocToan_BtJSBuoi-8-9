function checkEmptyValue(theThongBao, value) {
  if (value == "") {
    theThongBao.innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}

function checkMinMaxValue(theThongBao, value, min, max) {
  let doDai = value.length;
  if (doDai < min || doDai > max) {
    theThongBao.innerHTML = `Vui lòng nhập trong khoảng ${min} tới ${max}`;
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}

function checkEmailValue(theThongBao, value) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkEmail = regexEmail.test(value);
  if (checkEmail) {
    theThongBao.innerHTML = "";
  } else {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }
}

function checkPasswordValue(theThongBao, value) {
  let regexPassword = /^(?=.*[A-Z])(?=.*[\W_]).+$/;
  let checkPassword = regexPassword.test(value);
  if (checkPassword) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML =
      "Vui lòng nhập mật khẩu có ít nhất 1 ký tự viết hoa và một ký tự đặc biệt";
    return false;
  }
}

