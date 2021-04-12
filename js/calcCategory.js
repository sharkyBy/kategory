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



function fireLoad(area, heigth) {
    let fireLoad = multiplyCells();

    console.log(fireLoad, area, heigth);
    let maxArea = document.getElementById("maxArea").value

    checkData([area,heigth, maxArea]);

    let temporaryFireLoad = Math.round(fireLoad / replaceElem(area) * 100) / 100;    
    let newTempFireLoad;
    let tempFire;
    let category;

    if(temporaryFireLoad <=2200 & temporaryFireLoad > 1400) {
        newTempFireLoad = 2200;
        tempFire = 0.64 * newTempFireLoad * replaceElem(Math.pow(heigth,2));
        fireLoad >= tempFire ? category = "категория В1": category =  "категория В2";

    }
    else if(temporaryFireLoad <=1400 & temporaryFireLoad > 200) {
        newTempFireLoad = 1400;
        tempFire = 0.6 * newTempFireLoad * Math.pow(heigth,2);
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
_fireLoad.innerHTML = fireLoad,
_tempFireLoad.innerHTML = temporaryFireLoad,
_calcTempFireLoad.innerHTML = newTempFireLoad,
_tempLoad.innerHTML=0.6*newTempFireLoad*Math.pow(heigth,2)
)

}


function replaceElem(elem) {    
    return elem.replace(",",".")
}

//Проверка введенных данных

function checkData(arr) {

   arr.map( (item)  => {
       
    if(isNaN(item) & isNaN(replaceElem(item))) {
            return alert("Введите числовое значение");
            
        }
        else if (item == 0) {
            return alert("Значение должно быть больше нуля");
            
        }
        else {
           return item; 
        }
        
   }
    )

}

export {fireLoad}