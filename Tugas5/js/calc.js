function hitung(operasi){
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!");
        frm.hasil.value = '-'
    }    
    else {
        total = 0
        switch(operasi){
            case '+' : total = a1 + a2
            break
            case '-' : total = a1 - a2
            break
            case 'x' : total = a1 * a2
            break
            case '/' : total = a1 / a2
            break
            case '^' : total = Math.pow(a1,a2)
            break
        }
        frm.hasil.value = total
    } 
}