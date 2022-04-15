
function btn_clicked(inputItem) {
    if (inputItem == '=') {
        let ans = eval(document.getElementById("display").innerText);
        document.getElementById("display").innerText = ans;
        return;
    }
    if (inputItem == 'CLR') {
        document.getElementById("display").innerText = "";
        return;
    }
    if (inputItem == 'DEL') {
        let ans = document.getElementById("display").innerText;
        let n = ans.length
        document.getElementById("display").innerText = ans.substring(0,n-1);
        
        return;
    }

    document.getElementById("display").innerText = document.getElementById("display").innerText + inputItem
}
