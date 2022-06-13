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
window.calculate = () =>{
    const value2 = parseInt(document.querySelector("input.input").value)
    let result = null;
    switch (window.operation){
        case "plus": result = window.value + value2;
        break;
        case "minus": result = window.value - value2;
        break;
        case "mal": result = window.value * value2;
        break;
        case "geteilt": result = window.value / value2;
        break;
    }
    document.querySelector("input.input").value = result
}