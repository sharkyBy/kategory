import {checkData} from "./checkData.js";


//Сумма произведений ячеек строки

 function multiplyCells() {   
    // console.log(rows.length);
    let arrRows = Array.from(document.getElementsByName("newRow"));
     
    let multiply = []
    // console.log(arrRows)
    arrRows.map( (item) => {
       
        let  arr = Array.from(item.querySelectorAll("[name"));
        let heat, weight, res;
        arr.map( (item) => {   

            item.name == "heat" ?  heat = replaceElem(item.value) :
            item.name == "weight" ? weight = replaceElem(item.value): false;
            res = Math.round(heat * weight*100)/100;
        } )
              
        multiply.push(res);        
    }  )

    const sumElemArr = ( accumulator, currentValue ) => accumulator + currentValue;
    let fireLoad = multiply.reduce(sumElemArr);
    
    return fireLoad
}


//Определение категории помещения
function fireLoad() {
    let fireLoad = multiplyCells();

    // console.log(fireLoad, area, heigth);
    let maxArea = checkData().maxArea;
    let area = checkData().area; 
    let height =checkData().height;
    // console.log([area,height, maxArea]);

    let temporaryFireLoad = fireLoad / area;    
    let newTempFireLoad;
    let tempFire;
    let category;

    if(temporaryFireLoad <=2200 & temporaryFireLoad > 1400) {
        newTempFireLoad = 2200;
        tempFire = 0.64 * newTempFireLoad * height;
        fireLoad >= tempFire ? category = "категория В1": category =  "категория В2";

    }
    else if(temporaryFireLoad <=1400 & temporaryFireLoad > 200) {
        newTempFireLoad = 1400;
        tempFire = 0.6 * newTempFireLoad * height;
        fireLoad >= tempFire ? category = "категория В2": category = "категория В3";
    }
    else if(temporaryFireLoad <=200 & temporaryFireLoad > 100) {
        newTempFireLoad = temporaryFireLoad;
        category = "категория В4";
    }
    else if (temporaryFireLoad >2200) {
        newTempFireLoad = temporaryFireLoad;
        category = "категория В1"
    }
    else {
        newTempFireLoad = temporaryFireLoad;
        category = "категория Д"
    }
    
    //Доступ к полю вывода результата

let _category = document.getElementById("category");
let _fireLoad = document.getElementById("fireLoad");
let _tempFireLoad = document.getElementById("tempFireLoad");
let _calcTempFireLoad = document.getElementById("calcTempFireLoad");
let _tempLoad = document.getElementById("tempLoad");

return (
_category.innerHTML =category,
_fireLoad.innerHTML = Math.round(fireLoad,0),
_tempFireLoad.innerHTML = Math.round(temporaryFireLoad),
_calcTempFireLoad.innerHTML = Math.round(newTempFireLoad),
_tempLoad.innerHTML = Math.round(0.6*newTempFireLoad*height)
)

}
//Замена запятой на точку

function replaceElem(elem) {    
    return elem.replace(",",".")
}


export {fireLoad}