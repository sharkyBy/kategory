//Извлечение значений из поля option
function getValueOption() {
    const select = document.getElementById("material");
 const res = {
    name:select.selectedOptions[0].innerText,
    val:select.selectedOptions[0].value
}
// console.log(res);
return res

}
// Установка значений в ячейки строки таблицы
function setValueCells(e) {
    let name = e.currentTarget.parentElement.children[0].children[0].value=getValueOption().name;
    let val = e.currentTarget.parentElement.children[1].children[0].value=getValueOption().val
    
    return name, val, console.log(name,val)

}


export {setValueCells}