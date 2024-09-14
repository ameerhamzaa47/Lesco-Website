function resetf(){
    document.getElementById('rValue').value = '';
    document.getElementById('selectId').selectedIndex = 0;
}


function checkBill() {
    let rValue = document.getElementById("rValue").value;

    // Check if the reference code starts with "LE" (assuming Lesco bill codes start with "LE")
    if (rValue.startsWith("07")) {
        location.href = "https://bill.pitc.com.pk/lescobill/general?refno=" + rValue;
    } else {
        alert("Invalid reference code. Please enter a valid Lesco bill reference code.");
    }
}