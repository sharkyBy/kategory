

// Создание элементов option и назначение значений
function addElementOption(val, name) {
    let option = document.createElement("option");
    option.setAttribute("value",val);
    option.innerText = name;
    let select = document.getElementById("material");
    return select.append(option)
}

//Сортировка массива

function sortMaterial(arr) {
    
    return  arr.sort( 
        (a,b) => {
           
            if(a.name > b.name) {
                return 1
            } 
            else if (a.name < b.name ) {
                return -1
            }
             
            else  {
                return  0 
        }
        })
   
}

//Загрузка значений для блока select
function setMaterial(material) {
    sortMaterial(material);
    return material.map((item) => {
        let val = item.heat;
        let name = item.name;
        addElementOption(val,name)
    })
   
}

export {setMaterial}