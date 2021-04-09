//Сумма произведений ячеек строки

function productCells() {   
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

    return multiply, console.log(multiply)
}


export {productCells}