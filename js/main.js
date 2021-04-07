import {_store} from "./base.js";

setMaterial(_store.teplo);


let addRow = document.getElementById("addRow");
addRow.addEventListener("click", createRow);

// let add = document.getElementsByName("add");
// console.log(add)
// add[0].addEventListener("click",()=>el.parentElement.remove())


function setValue() {
    const select = document.getElementById("material");
 const res = {
    name:select.selectedOptions[0].innerText,
    val:select.selectedOptions[0].value
}
return res

}

function getElem(e) {
    let name = e.target.parentElement.parentElement.children[0].firstChild.value=setValue().name;
    let val = e.target.parentElement.parentElement.children[1].firstChild.value=setValue().val;
    return name, val

}


function addElementOption(val, name) {
    let option = document.createElement("option");
    option.setAttribute("value",val);
    option.innerText = name;
    let select = document.getElementById("material");
    return select.append(option)
}

function setMaterial(material) {
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


function setAttributes(el,attr) {
    for (let key in attr) {
        el.setAttribute(key,attr[key])
    }
}

