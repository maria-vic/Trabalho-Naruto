
function clicar1(){
let digite = document.getElementById('digite').value;

switch(digite){
    case 'Clássico':
        window.location.assign("./classicotrilha.html");
        break;
    case 'Shippuden':
        window.location.assign("./shippudentrilha.html")
}

}

window.onload = function(){
    clicar1();
} 