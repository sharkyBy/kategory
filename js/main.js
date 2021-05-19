import { _store } from "./base.js";
import { setMaterial } from "./setMaterial.js";
import { setValueCells } from "./setValueCells.js";
import { fireLoad } from "./calcCategory.js";
import { createRow } from "./createRow.js";
import { deleteRow } from "./deleteRow.js";




// Добавление значений поля select в ячейки страницы
const _firstSpan = document.getElementById("add");
_firstSpan.addEventListener("click", (e) => {
  setValueCells(e);
});

// Рассчет результата умножения ячеек таблицы
const _result = document.getElementById("result");
// _result.addEventListener("click", ()=>fireLoad(_area.value,_height.value));
_result.addEventListener("click", fireLoad)


//Добавление строки в таблицу
const _addRow = document.getElementById("addRow");
_addRow.addEventListener("click", createRow);

// Добавление веществ в поле select из базы данных
setMaterial(_store.teplo);

//Удаление строки таблицы
const _deleteRow = document.getElementById("delete");
_deleteRow.addEventListener("click", (e)=>deleteRow(e));

//Получение результата из поля "площадь" и "высота"
let areaValue = (e)=>getValue(e);
let heightValue = (e)=>getValue(e);

//Получение значения площади
// const _area = document.getElementById("area");
// _area.addEventListener("input", areaValue )
//Получение значения высоты
// const _height = document.getElementById("height");
// _height.addEventListener("input", heightValue);

//Получение значения текущего элемента
function getValue(e) {
  console.log(e.currentTarget.value);
  return e.currentTarget.value
  
}


//Выведение подсказки
let inputArea = document.getElementById("area");
inputArea.addEventListener("mouseover",tooltipMove);
inputArea.addEventListener("mouseout",tooltipMove)

function tooltipMove() {  
  let tooltip = document.getElementById("areaTooltip");  
  tooltip.classList.contains("active")==false ? tooltip.classList.add("active"):
  tooltip.classList.remove("active"); 
}

