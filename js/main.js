import { _store } from "./base.js";
import { setMaterial } from "./setMaterial.js";
import { setValueCells } from "./setValueCells.js";
import { multiplyCells } from "./multiplyCells.js";
import { createRow } from "./createRow.js";
import { deleteRow } from "./deleteRow.js";

// Добавление значений поля select в ячейки страницы
const _firstSpan = document.getElementById("add");
_firstSpan.addEventListener("click", (e) => {
  setValueCells(e);
});

// Рассчет результата умножения ячеек таблицы
const _result = document.getElementById("result");
_result.addEventListener("click", multiplyCells);

//Добавление строки в таблицу
const _addRow = document.getElementById("addRow");
_addRow.addEventListener("click", createRow);

// Добавление веществ в поле select из базы данных
setMaterial(_store.teplo);

//Удаление строки таблицы
const _deleteRow = document.getElementById("delete");
_deleteRow.addEventListener("click", (e)=>deleteRow(e));

//Получение значения площади
const _area = document.getElementById("area");

//Получение значения высоты
const _height = document.getElementById("height");

