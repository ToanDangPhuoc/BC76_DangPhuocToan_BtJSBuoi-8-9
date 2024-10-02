let arrNhanVien = [];

// thêm nhân viên
document.getElementById("form-content").onsubmit = function (event) {
  console.log("hello");
  let nhanVien = getValueForm();
  if (nhanVien != null) {
    console.log(nhanVien);
    arrNhanVien.push(nhanVien);
    setDataLocal("arrNhanVien", arrNhanVien);
    renderData();
    event.preventDefault();
  }
};

// Hiển thị lên giao diện

function renderData(arr = arrNhanVien) {
  let content = "";
  for (let nhanVien of arr) {
    let newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    let { tknv, name, email, datepicker, chucvu, tinhTongLuong, loaiNhanVien } =
      newNhanVien;
    content += `
    <tr> 
    <td>${tknv}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${datepicker}</td>
    <td>${chucvu}</td>
    <td>$${newNhanVien.tinhTongLuong()}</td>
    <td>${newNhanVien.loaiNhanVien()}</td>
    <td>
    <button onclick="xoaNhanVien('${tknv}')" class="btn btn-danger">Xóa</button>
   <button id="openModalBtn" class="btn btn-warning" onclick="openModal('${tknv}')">Sửa</button>
    </td>
    </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

window.onload = function () {
  let dataLocal = getDataLocal("arrNhanVien");
  if (dataLocal) {
    arrNhanVien = dataLocal;
    renderData();
  }
};
// local storage'

//---function setdatalocal---
function setDataLocal(key, value) {
  let dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
}
//---function getdatalocal---
function getDataLocal(key) {
  let dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
}

//---function xóa ----
function xoaNhanVien(tknv) {
  let index = arrNhanVien.findIndex((item, i) => item.tknv == tknv);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderData();
    setDataLocal("arrNhanVien", arrNhanVien);
  }
}
//--- get value form ---
function getValueForm() {
  let arrField = document.querySelectorAll(
    "#form-content input,#form-content select"
  );
  let flag = true;
  let nhanVien = new NhanVien();
  for (let field of arrField) {
    let { value, id } = field;
    nhanVien[id] = value;
  }
  return nhanVien;
}
// --- function sửa---
function openModal(tknv) {
  $("#myModal").modal("show");
  getInfoNhanVien(tknv);
  let nutThem = document.getElementById("btnThemNV");
  if (nutThem) {
    nutThem.disabled = true;
  }
}

function getInfoNhanVien(tknv) {
  console.log(tknv);
  let nhanVien = arrNhanVien.find((item, index) => item.tknv == tknv);
  if (nhanVien) {
    let arrField = document.querySelectorAll(
      "#form-content  input, #form-content select"
    );
    for (let field of arrField) {
      field.value = nhanVien[field.id];
      if (field.id == "tknv") {
        field.readOnly = true;
      }
    }
  }
}
//--- rest from ---
function resetForm() {
  let arrField = document.querySelectorAll(
    "#form-content input, #form-content select"
  );
  for (let field of arrField) {
    field.value = "";
    if (field.id === "tknv") {
      field.readOnly = false;
    }
  }
}
// cập nhật
document.getElementById("btnCapNhat").onclick = function () {
  console.log("Cập nhật");
  let nhanVien = getValueForm();
  let index = -1;
  let email = nhanVien.email;
  for (let i in arrNhanVien) {
    if (arrNhanVien[i].email == email) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    arrNhanVien[index] = nhanVien;
    renderData();
    setDataLocal("arrNhanVien", arrNhanVien);

    $("#myModal").modal("hide");
  }
  resetForm();
};
