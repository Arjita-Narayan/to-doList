const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
      ${inputBox.value}
      <span class="edit">✎</span>
      <span class="delete">×</span>`;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("edit")) {
      const li = e.target.parentElement;
      const currentText = li.firstChild.textContent.trim();
      const newText = prompt("Edit your task:", currentText);
      if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText;
        saveData();
      }
    } else if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw_cached_pages.js")
      .then((reg) => console.log("Service Worker:Registered"))
      .catch((err) => console.log(`Service Worker:Error:${err}`));
  });
}
