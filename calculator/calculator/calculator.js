function sow_in_screen(parameter) {
    values = document.getElementById("screen").value;
    if (parameter === "CE") {
        document.getElementById("screen").value = '';
    }
    
    else if (typeof (parameter) === "number" && parameter !== 0) {
        new_value = values + parameter;
        document.getElementById("screen").value = new_value;
    }
    else if (parameter === "-" && values.charAt(values.length - 1) != "-"&&values.charAt(values.length - 1) != "+") {
        new_value = values + parameter;
        document.getElementById("screen").value = new_value;
    }
    else if (values) {
        if (parameter === 0) {
            new_value = values + parameter;
            document.getElementById("screen").value = new_value;
        }
        else if (parameter === "*", "/", "+" && parameter !== "-" && values.charAt(values.length - 1) != "*" && values.charAt(values.length - 1) != "-" && values.charAt(values.length - 1) != "/" && values.charAt(values.length - 1) != "+") {
            new_value = values + parameter;
            document.getElementById("screen").value = new_value;
        }
    }
}
function return_value() {
    value_id = document.getElementById("screen").value;
    if (value_id) {
        solve_value = eval(value_id);
        document.getElementById("screen").value = solve_value;
    }
}