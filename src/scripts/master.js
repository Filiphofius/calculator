import '../styles/master.less';
window.readValue = ()=>{
    window.value = parseInt(document.querySelector("input.input").value)
    console.log(value)
}
window.setOperation = (operationName) =>{
    readValue();
    window.operation = operationName
    document.querySelector("input.input").value = null;
}
window.setNumber = (numberName)=>{
    document.querySelector("input.input").value = document.querySelector("input.input").value + numberName
    window.value2 = parseInt(document.querySelector("input.input").value)
    console.log(window.value2)
}
window.calculate = () =>{
    let result = null;
    switch (window.operation){
        case "plus": result = window.value + window.value2;
        break;
        case "minus": result = window.value - window.value2;
        break;
        case "mal": result = window.value * window.value2;
        break;
        case "geteilt": result = window.value / window.value2;
        break;
    }
    document.querySelector("input.input").value = result
    window.value = result
}