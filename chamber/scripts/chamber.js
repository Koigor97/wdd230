"use strict";
const button = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-navigation");

button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded');
    const isVisible = primaryNav.getAttribute("data-visible");
    if (isOpen === 'false' && isVisible === 'false') {
        button.setAttribute('aria-expanded', true);
        primaryNav.setAttribute("data-visible", true)
    } else {
        button.setAttribute('aria-expanded', false);
        primaryNav.setAttribute("data-visible", false);
    }
})

const date = new Date();
const dateUpdate = document.querySelector("#date");
const topDate = document.querySelector("#top-date");

dateUpdate.textContent = `${
  date.getMonth() + 1
}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

try {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };
    topDate.textContent = `${date.toLocaleDateString("en-UK", options)}`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}

const show = document.querySelector(".pop");
let dayOfWeek = date.toLocaleDateString('default', {weekday: "long"});
    
if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday") {
    show.style.display = "block";
}