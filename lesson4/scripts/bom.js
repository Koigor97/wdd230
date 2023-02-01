"use strict";

const input = document.querySelector("#favchap");
const listOfChap = document.querySelector("#list");
const addBtn = document.querySelector("#btn");

function addChapter() {
    if (input.value !== "") {
        let listItem = document.createElement("li");

        let deleteBtn = document.createElement("button")
        deleteBtn.style.padding = "10px";
        deleteBtn.style.backgroundColor = "#9e9c48";
        deleteBtn.style.border= "none";
        deleteBtn.style.borderRadius = "5px";
        


        listItem.textContent = input.value;
        deleteBtn.textContent = "❌";
       
        deleteBtn.addEventListener("click", () => {
            listOfChap.removeChild(listItem)
        });
        
        listItem.appendChild(deleteBtn);
        listOfChap.appendChild(listItem);
    }
    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addChapter)