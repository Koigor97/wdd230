"use strict";

const date = new Date();
const dateUpdate = document.querySelector(".date");

dateUpdate.textContent = `${
  date.getMonth() + 1
}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
