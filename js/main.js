import {_store} from "./base.js";


// function load() {
    setMaterial(_store.teplo); 
    const firstSpan = document.getElementById("add");
    firstSpan.addEventListener("click",(e)=> {        
        getElem(e);
    });

    
// }



//Назначение события на кнопку первой строки
// window.addEventListener("load", load)


// Обработка события на кнопке
const result = document.getElementById("result");
result.addEventListener("click", getCellsMultiply)

//Добавление строки в форму
let addRow = document.getElementById("addRow");
addRow.addEventListener("click", createRow);

//Назначение значений новым полям option
function setValue() {
    const select = document.getElementById("material");
 const res = {
    name:select.selectedOptions[0].innerText,
    val:select.selectedOptions[0].value
}
console.log(res);
return res

}
// Установка значений в ячейки для строк
function getElem(e) {
    let name = e.target.parentElement.parentElement.children[0].firstChild.value=setValue().name;
    let val = e.target.parentElement.parentElement.children[1].firstChild.value=setValue().val;
    // console.log("i'm entry")
    return console.log(name)

}

// Создание элементов option и назначение значений
function addElementOption(val, name) {
    let option = document.createElement("option");
    option.setAttribute("value",val);
    option.innerText = name;
    let select = document.getElementById("material");
    return select.append(option)
}

//Загрузка значений для блока select
function setMaterial(material) {
    return material.map((item) => {
        let val = item.heat;
        let name = item.name;
        addElementOption(val,name)
    })
   
}

// Создание новой строки
function createRow() {
    
    let table = document.getElementById("tableRow")
    let div = document.createElement("div");    
    setAttributes(div,{"class":"row", "name":"newRow"});
    let span = document.createElement("span");
        let icon = document.createElement("i");
        span.setAttribute("class","icon");
        span.addEventListener("click", getElem )
        setAttributes(icon,{"class":"fas fa-plus"});
        span.append(icon);
    for (let i=1; i<=3; i++) {       
        let child = document.createElement("div");
        let input = document.createElement("input");
        child.setAttribute("class","cells");        
        setAttributes(input,{"type": "text","class":"input"})
         child.append(input);
         div.append(child)
        };
        div.append(span);
    return table.append(div)
    
}

//Установка атрибутов для элементов
function setAttributes(el,attr) {
    for (let key in attr) {
        el.setAttribute(key,attr[key])
    }
}

function getCellsMultiply() {   
    // console.log(rows.length);
    let arrRows = Array.from(document.getElementsByName("newRow"));
    let multiply = []
    // console.log(arrRows)
    arrRows.map( (item) => {
        let heat = item.children[1].children[0].value;
        let weight = item.children[2].children[0].value;
        let res = heat * weight;
        multiply.push(res);        
    }  )

    return console.log(multiply)
}

