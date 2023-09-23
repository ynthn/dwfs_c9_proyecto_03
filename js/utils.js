/**
 * FORMAT DATE TO DD-MM-YYYY 
 */
function formatDate(date) {
    let format = date.split("-");
    let newDate = format[1] + "-" + format[2] + "-" + format[0];

    return newDate;
}

/**
 * FORMAT NUM DECIMAL
 */
function replaceForDecimal(num) {
    let newNum = num.replace(",", ".");

    return newNum;
}



export { formatDate, replaceForDecimal };