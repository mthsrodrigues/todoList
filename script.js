"use strict";

let activeItem = 1;

const submitButton = document.querySelector(".submit");
const clearButton = document.querySelector(".clear-list");
const inputTextBox = document.querySelector(".input-text");

const closeItemButton1El = document.querySelector(".close-button-1");
const closeItemButton2El = document.querySelector(".close-button-2");
const closeItemButton3El = document.querySelector(".close-button-3");
const closeItemButton4El = document.querySelector(".close-button-4");
const closeItemButton5El = document.querySelector(".close-button-5");
const closeItemButton6El = document.querySelector(".close-button-6");

const doneItemButton1El = document.querySelector(".done-button-1");
const doneItemButton2El = document.querySelector(".done-button-2");
const doneItemButton3El = document.querySelector(".done-button-3");
const doneItemButton4El = document.querySelector(".done-button-4");
const doneItemButton5El = document.querySelector(".done-button-5");
const doneItemButton6El = document.querySelector(".done-button-6");

const blockListItem1 = document.getElementById("item-1");
const blockListItem2 = document.getElementById("item-2");
const blockListItem3 = document.getElementById("item-3");
const blockListItem4 = document.getElementById("item-4");
const blockListItem5 = document.getElementById("item-5");
const blockListItem6 = document.getElementById("item-6");

const textToDo1 = document.querySelector(`.list-item-1`);
const textToDo2 = document.querySelector(`.list-item-2`);
const textToDo3 = document.querySelector(`.list-item-3`);
const textToDo4 = document.querySelector(`.list-item-4`);
const textToDo5 = document.querySelector(`.list-item-5`);
const textToDo6 = document.querySelector(`.list-item-6`);

submitButton.addEventListener("click", function () {
  if (inputTextBox.value !== "") {
    const listItemActive = document.querySelector(`.list-item-${activeItem}`);

    if (activeItem === 1) blockListItem1.classList.remove("display-none");
    if (activeItem === 2) blockListItem2.classList.remove("display-none");
    if (activeItem === 3) blockListItem3.classList.remove("display-none");
    if (activeItem === 4) blockListItem4.classList.remove("display-none");
    if (activeItem === 5) blockListItem5.classList.remove("display-none");
    if (activeItem === 6) blockListItem6.classList.remove("display-none");

    let todoItemName = "";
    todoItemName = inputTextBox.value;

    inputTextBox.value = "";

    if (listItemActive.textContent.length <= 5) {
      listItemActive.textContent += todoItemName;
    } else {
      alert(
        `Você está tentando renomear um item já definido, o item de número: ${activeItem}, para mudá-lo aperte o X! :)`
      );
    }

    if (activeItem < 6) {
      activeItem++;
    } else {
      activeItem = 1;
    }
  }
});

clearButton.addEventListener("click", function () {
  textToDo1.textContent = `1. `;
  textToDo2.textContent = `2. `;
  textToDo3.textContent = `3. `;
  textToDo4.textContent = `4. `;
  textToDo5.textContent = `5. `;
  textToDo6.textContent = `6. `;

  blockListItem1.classList.add("display-none");
  blockListItem2.classList.add("display-none");
  blockListItem3.classList.add("display-none");
  blockListItem4.classList.add("display-none");
  blockListItem5.classList.add("display-none");
  blockListItem6.classList.add("display-none");

  textToDo1.classList.remove("done");
  textToDo2.classList.remove("done");
  textToDo3.classList.remove("done");
  textToDo4.classList.remove("done");
  textToDo5.classList.remove("done");
  textToDo6.classList.remove("done");

  activeItem = 1;
});

closeItemButton1El.addEventListener("click", function () {
  blockListItem1.classList.add("display-none");
  textToDo1.textContent = `1. `;
  textToDo1.classList.remove("done");

  activeItem = 1;
});

closeItemButton2El.addEventListener("click", function () {
  blockListItem2.classList.add("display-none");
  textToDo2.textContent = `2. `;
  textToDo2.classList.remove("done");

  activeItem = 2;
});

closeItemButton3El.addEventListener("click", function () {
  blockListItem3.classList.add("display-none");
  textToDo3.textContent = `3. `;
  textToDo3.classList.remove("done");

  activeItem = 3;
});

closeItemButton4El.addEventListener("click", function () {
  blockListItem4.classList.add("display-none");
  textToDo4.textContent = `4. `;
  textToDo4.classList.remove("done");

  activeItem = 4;
});

closeItemButton5El.addEventListener("click", function () {
  blockListItem5.classList.add("display-none");
  textToDo5.textContent = `5. `;
  textToDo5.classList.remove("done");

  activeItem = 5;
});

closeItemButton6El.addEventListener("click", function () {
  blockListItem6.classList.add("display-none");
  textToDo6.textContent = `6. `;
  textToDo6.classList.remove("done");

  activeItem = 6;
});

doneItemButton1El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo1.textContent}, estamos com orgulho de você!`
  );
  textToDo1.classList.add("done");
});

doneItemButton2El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo2.textContent}, estamos com orgulho de você!`
  );
  textToDo2.classList.add("done");
});

doneItemButton3El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo3.textContent}, estamos com orgulho de você!`
  );
  textToDo3.classList.add("done");
});

doneItemButton4El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo4.textContent}, estamos com orgulho de você!`
  );
  textToDo4.classList.add("done");
});

doneItemButton5El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo5.textContent}, estamos com orgulho de você!`
  );
  textToDo5.classList.add("done");
});

doneItemButton6El.addEventListener("click", function () {
  alert(
    `Parabéns, você concluiu ${textToDo6.textContent}, estamos com orgulho de você!`
  );
  textToDo6.classList.add("done");
});
