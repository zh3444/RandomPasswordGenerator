
function generatePassword(){
    const isLowercase = document.getElementById("isLowercase");
    const isUppercase = document.getElementById("isUppercase");
    const isNumber = document.getElementById("isNumber");
    const isSymbol = document.getElementById("isSymbol");
    const result = document.getElementById("result");
    const length = document.getElementById("length").value;
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()-_+={[}]|,./<>?";

    let charSet = "";
    charSet += isLowercase.checked ? lowercase : "";
    charSet += isUppercase.checked ? uppercase : "";
    charSet += isNumber.checked ? numbers : "";
    charSet += isSymbol.checked ? symbols : "";
    
    if (length < 1){
        result.textContent = `Minimum length of password = 1`;
        return;
    }
    if (charSet == ""){
        result.textContent = `Select at least one character set`;
        return;
    }

    let i;
    let password="";
    for (i=0;i<length;i++){
        let temp = Math.floor(Math.random() * charSet.length);
        password += charSet[temp];
    }
    result.textContent = `Generated Password: ${password}`;
}