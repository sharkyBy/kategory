//Добавление строки в таблицу
function deleteRow (e) {   

    let del =e.target.parentElement.parentElement
    console.log(del.remove())


}


export { deleteRow }