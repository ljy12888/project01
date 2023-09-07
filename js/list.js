document.addEventListener("DOMContentLoaded", () => {
  const TableArea = document.querySelector(".Table_Area");

  /* localstorage를 바디에 뿌려주기 */
  let array = JSON.parse(localStorage.getItem("input"));
  console.log(array);
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[1].순번);
  console.log(array[1].제목);

  const table = document.querySelector("#table");

  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    table.appendChild(tr).append(td1, td2, td3, td4, td5);
    td1.textContent = i + 1;
    td2.textContent = array[i].제목;
    td3.textContent = array[i].작성자;
    td4.textContent = 999;
    td5.textContent = array[i].작성일자;
  }

  const titleInput = document.getElementById("title_input");
  const titleText = document.getElementById("title_text");
  const titleName = document.getElementById("title_name");
  const 등록버튼 = document.getElementById("update");

  // 등록하기
  let arr = JSON.parse(localStorage.getItem("input")) ?? [];

  등록버튼.addEventListener("click", () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 월(0~11까지 돌아서 +1)
    let date = today.getDate();

    if (titleInput.value == "") {
      alert("제목을 입력해주세요.");
      titleInput.focus();
    } else if (titleText.value == "") {
      alert("내용을 입력해주세요.");
      titleText.focus();
    } else if (titleName.value == "") {
      alert("작성자를 입력해주세요.");
      titleName.focus();
    } else {
      arr.push({
        제목: titleInput.value,
        내용: titleText.value,
        작성자: titleName.value,
        작성일자: year + "/" + month + "/" + date,
      });

      localStorage.setItem("input", JSON.stringify(arr));

      titleInput.value = "";
      titleText.value = "";
      titleName.value = "";
      window.location.reload();
    }
  });
});
