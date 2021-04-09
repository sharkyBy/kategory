

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

export {setMaterial}