import { setAttributes } from "./setAttributes.js";
import { setValueCells } from "./setValueCells.js";
import { deleteRow } from "./deleteRow.js";

// Создание новой строки таблицы
function createRow() {
  let table = document.getElementById("tableRow");
  let div = document.createElement("div");

  setAttributes(div, { class: "row", name: "newRow" });

  let spanAdd = document.createElement("span");
  let spanDelete = document.createElement("span");
  let iconAdd = document.createElement("i");
  let iconDelete = document.createElement("i");

  setAttributes(spanAdd, { class: "icon", name: "add" });
  setAttributes(spanDelete, { class: "icon", name: "delete" });

  spanAdd.addEventListener("click", setValueCells);
  spanDelete.addEventListener("click", deleteRow);

  setAttributes(iconAdd, { class: "fas fa-plus" });
  setAttributes(iconDelete, { class: "fas fa-trash-alt" });

  spanAdd.append(iconAdd);
  spanDelete.append(iconDelete);

  for (let i = 1; i <= 3; i++) {
    let child = document.createElement("div");
    let input = document.createElement("input");
    child.setAttribute("class", "cells");
    switch (i) {
      case 1:
        setAttributes(input, {
          type: "text",
          class: "input",
          name: "substance",
        });
        break;
      case 2:
        setAttributes(input, { type: "text", class: "input", name: "heat" });
        break;
      case 3:
        setAttributes(input, { type: "text", class: "input", name: "weight" });
        break;
      default:
        false;
        break;
    }

    child.append(input);
    div.append(child);
  }
  div.append(spanAdd);
  div.append(spanDelete);
  return table.append(div);
}

export { createRow };
