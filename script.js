let result;

let calculate = (number) => {
    document.getElementById("inputNumbers").value += number;
    result = document.getElementById("inputNumbers").value;
}

let equal = () => {
    try {
        result=eval(result);
        document.getElementById("inputNumbers").value = result;
    } 
    catch (error) {
        alert("erro!!!!! :D");
    }
}

let del = () => {
    result=result.slice(0,-1);
    document.getElementById("inputNumbers").value = result;
}

let reset = () => {
    result = "";
    document.getElementById("inputNumbers").value = result;
}