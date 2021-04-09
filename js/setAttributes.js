
//Установка атрибутов для элементов
function setAttributes(el,attr) {
    for (let key in attr) {
        el.setAttribute(key,attr[key])
    }
}

export {setAttributes};