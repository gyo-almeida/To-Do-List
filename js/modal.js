document.querySelector(".new-task").addEventListener("click", modalNewTask);

function modalNewTask() {
  let body = document.querySelector("body");
  let backGround = document.createElement("div");
  let main = document.createElement("div");
  let title = document.createElement("h2");
  let close = document.createElement("span");
  let form = document.createElement("form");
  let input = document.createElement("input");
  let button = document.createElement("button");

  backGround.classList.add("background-div");
  main.classList.add("main-div");
  close.classList.add("close-modal");
  input.classList.add("value-input");
  button.classList.add("submit");

  title.innerText = "New Task";
  close.innerText = "X";
  input.placeholder = "What we have to do?";
  button.innerText = "Create";

  close.addEventListener("click", () => {
    main.remove();
  });

  body.appendChild(backGround);
  backGround.appendChild(main);
  main.append(title, close, form);
  form.append(input, button);
}
