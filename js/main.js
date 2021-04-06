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
    
    for (let i=1; i<=3; i++) {       
        let child = document.createElement("div");
        child.setAttribute("class","cells");
        let input = document.createElement("input");
        setAttributes(input,{"type": "text","class":"input"})
         child.append(input);
         div.append(child)
        };
        
    return table.append(div)
    
}


function setAttributes(el,attr) {
    for (let key in attr) {
        el.setAttribute(key,attr[key])
    }
}

