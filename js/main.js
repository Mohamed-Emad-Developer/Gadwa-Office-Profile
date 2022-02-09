var mngname = document.getElementById("mng-name");
let index = 0;
let nameInterval;
window.onload = typingName;

function typingName() {
  let name = mngname.innerHTML;
  let nameLength = name.length;
  mngname.innerHTML = "";
  nameInterval = setInterval(() => {
    if (index < nameLength) {
      mngname.innerHTML += name[index];
      index++;
    } else {
      index = 0;
      mngname.innerHTML = "";
    }
  }, 200);
}
