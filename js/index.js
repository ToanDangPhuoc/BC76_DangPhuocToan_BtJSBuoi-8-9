let arrNhanVien = [];

// thêm nhân viên
document.getElementById("form-content").onsubmit = function (event) {
  event.preventDefault();
  console.log("hello");
  let arrField = document.querySelectorAll(
    "#form-content input, #form-content select"
  );
  console.log(arrField);
  let nhanVien = new NhanVien();
  for (let field of arrField) {
    let { value, id } = field;
    nhanVien[id] = value;
  }
  console.log(nhanVien);
  arrNhanVien.push(nhanVien);
  setDataLocal("arrNhanVien", arrNhanVien);
  renderData();
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
  let index = arrNhanVien.findIndex((item, i) => item.tknv == tknv); // -1
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderData();
    setDataLocal("arrNhanVien", arrNhanVien);
  }
}

// --- function sửa---
function openModal(tknv) {
  $("#myModal").modal("show"); // Sử dụng jQuery để hiển thị modal
  getInfoNhanVien(tknv);
}

function getInfoNhanVien(tknv) {
  console.log(tknv);

  let nhanVien = arrNhanVien.find((item, index) => item.tknv == tknv); // sinhVien || undifined
  if (nhanVien) {
    let arrField = document.querySelectorAll(
      "#form-content  input, #form-content select"
    );
    for (let field of arrField) {
      // field đại diện cho các input và select tìm kiếm được trong form
      field.value = nhanVien[field.id];
      if (field.id == "tknv") {
        field.readOnly = true;
      }
    }
  }
}

// tìm kiếm nhân viên
document.getElementById("btnTimNV").oninput = function (event) {
  let keyword = event.target.value.trim().toLowerCase();
  console.log(keyword);
  let newKeyword = removeVietnameseTones(keyword);

  let arrSearch = arrNhanVien.filter((item, index) => {
    // item.txtTenSv =" Quang Khai" newKeyword="Quang"

    let loaiNhanVien = removeVietnameseTones(
      item.txtTenSV.trim().toLowerCase()
    );
    return newTenSinhVien.includes(newKeyword);
  });
  renderDataSinhVien(arrSearch);
};
