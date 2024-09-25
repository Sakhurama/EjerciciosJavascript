let precio = 200;
const iva = (21 * precio / 100);

function total(){
    return precio + iva;
}

console.log(total())