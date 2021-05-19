//Проверка введенных данных

function checkData() {
  let maxArea = document.getElementById("maxArea");
  let area = document.getElementById("area");
  let height = document.getElementById("height");
  let arr = [maxArea.value,area.value, height.value ];

  let obj = {};
   for (let i = 0; i < arr.length; i++) {
     if (
      arr[i] == 0 ||
      Number.isNaN(arr[i]) & Number.isNaN(arr[i].replace(",", "."))
    ) {
    //   console.log(arr[i]);
      switch (i) {
        case 0:
          alert("Введите площадь помещения");
          break;
        case 1:
          alert("Введите площадь размещения пожарной нагрузки");
          break;
        case 2:
          alert("Не задана высота помещения");
          break;
        default:
          break;
      }
      return;
    } else {
      switch (i) {
        case 0:    
          obj.maxArea = Number(arr[i]);
          break;
        case 1:          
          obj.area = Number(arr[i]);
          break;
        case 2:
          obj.height = Number(arr[i]);
        default:
          break;
      }
    //   console.log(obj);
    }
  }
return (
    obj.maxArea < 10 ? alert("Площадь помещения не менее 10м2"): obj.maxArea,
    obj.area < 10 ? alert("Площадь размещения пожарной нагрузки не менее 10м2"): 
    obj.area > obj.maxArea ? alert("Площадь размещения пожарной нагрузки не более площади помещения"): obj
)
}

//Проверка на числовое значение

function checkForNumber(elem) {
    return Number.isNaN(elem) & Number.isNaN(elem) ? alert("Введите числовое значение"):
    elem == 0 ? alert("Значение должно быть больше нуля"):elem;

}

function checkMinNumeric(arr) {
    let newArr = arr.map( (item, index) => {
        return (
           index == 0 & item < 10 ? alert("Площадь помещения не менее 10м2"):        
        index == 1 & item < 10 ? alert("Площадь размещения пожарной нагрузки не менее 10м2"):
        index == 1 & item > item[0] ? alert ("Площадь размещения пожарной нагрузки не более площади помещения"):
        item
        )
        
        
    }  ) 
}

export { checkData };
