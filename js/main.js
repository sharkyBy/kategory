import {_store} from "./base.js";

getMaterial(_store.teplo);


let addRow = document.getElementById("addRow");
addRow.addEventListener("click", createRow);


function addElementOption(val, name) {
    let option = document.createElement("option");
    option.setAttribute("value",val);
    option.innerText = name;
    let select = document.getElementById("material");
    return select.append(option)
}

function getMaterial(material) {
    return material.map((item) => {
        let val = item.heat;
        let name = item.name;
        addElementOption(val,name)
    })
   
}

function createRow() {
    
    let table = document.getElementById("tableRow")
    let div = document.createElement("div");    
    div.setAttribute("class","row");
    let span = document.createElement("span");
        let icon = document.createElement("i");
        span.setAttribute("class","icon");
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


function setAttributes(el,attr) {
    for (let key in attr) {
        el.setAttribute(key,attr[key])
    }
}

