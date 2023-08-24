const addButton = document.querySelector("#add-btn");
const deleteButton = document.querySelector("#delete-btn");

const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value != "") {
    const li = document.createElement("li");

    li.innerHTML = `<span> ${input.value} </span>
    <div class="list-div">
    <button class="list-complete-btn">Complete</button>
    <button class="list-delete-btn">Delete</button>
    </div>`;

    list.appendChild(li);

    goThroughList();

    input.value = "";
  }
});

window.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    const input = document.querySelector("input");

    if (input.value != "") {
      const li = document.createElement("li");

      li.innerHTML = `<span> ${input.value} </span>
    <div class="list-div">
    <button class="list-complete-btn">Complete</button>
    <button class="list-delete-btn">Delete</button>
    </div>`;

      list.appendChild(li);

      goThroughList();

      input.value = "";
    }
  }
});

deleteButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  input.value = "";
});

// listCompleteButton.addEventListener("click", () => {
//   listCompleteButton.parentElement.style.opacity = 0.5;
// });

// listDeleteButton.addEventListener("click", () => {
//   const child = listDeleteButton.parentElement;
//   console.log("child = ", child);
//   const parent = listDeleteButton.parentElement.parentElement;
//   console.log("parent = ", parent);
//   parent.removeChild(child);
// });

function goThroughList() {
  const todos = document.querySelectorAll("li");
  const listCompleteButton = document.querySelectorAll(".list-complete-btn");
  const listDeleteButton = document.querySelectorAll(".list-delete-btn");
  console.log(todos);

  listCompleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.style.opacity = 0.4;
    });
  });

  listDeleteButton.forEach((button) => {
    button.addEventListener("click", () => {
      const child = button.parentElement.parentElement;
      console.log("child = ", child);
      const parent = button.parentElement.parentElement.parentElement;
      console.log("parent = ", parent);
      parent.removeChild(child);
    });
  });
}
