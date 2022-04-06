let result;
let darkmode = false;

const setTheme = theme => { document.documentElement.className = theme };

const calculate = (number) => {
    document.getElementById("inputNumbers").value += number;
    result = document.getElementById("inputNumbers").value;
}

const equal = () => {
    try {
        result=eval(result);
        document.getElementById("inputNumbers").value = result;
    } 
    catch (error) {
        alert("Digite uma operação válida!");
        reset();
    }
}

const del = () => {
    result=result.slice(0,-1);
    document.getElementById("inputNumbers").value = result;
}

const reset = () => {
    result = "";
    document.getElementById("inputNumbers").value = result;
}