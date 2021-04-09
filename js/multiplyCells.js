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
            item.name == "heat" ?  heat = item.value :
            item.name == "weight" ? weight = item.value: false;
            res = Math.round(heat * weight*1000)/1000;
        } )
        // let heat = item.children[1].children[0].value;
        // let weight = item.children[2].children[0].value;
        
        multiply.push(res);        
    }  )

    const sumElemArr = ( accumulator, currentValue ) => accumulator + currentValue;
    const fireLoad = multiply.reduce(sumElemArr);
    
    return fireLoad, console.log(multiply, fireLoad)
}

function division(area, heigth) {
    const fireLoad = multiply();
    let temporaryFireLoad = fireLoad / area;
    const newTempFireLoad;
    console.log(temporaryFireLoad);
    temporaryFireLoad <= 2200 & temporaryFireLoad > 1400 ? newTempFireLoad = 2200:
    temporaryFireLoad <=1400 & temporaryFireLoad > 200 ? newTempFireLoad = 1400: temporaryFireLoad;
    let tempFire = 0.64 * newTempFireLoad * Math.pow(heigth,2) ;
    // if(temporaryFireLoad >= tempFire) TODO!
    
}



export {multiplyCells}