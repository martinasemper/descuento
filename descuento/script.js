function calcularDescuento() {
    let montoCompra = document.querySelector("montoCompra").value;
    let porcentajeDescuento = 0;

    if (montoCompra > 100000) {
        porcentajeDescuento = 40;
    } else if (montoCompra > 30000) {
        porcentajeDescuento = 20;
    } else if (montoCompra > 10000) {
        porcentajeDescuento = 10;
    }

    let montoDescuento = montoCompra * porcentajeDescuento / 100;
    let  montoFinal = montoCompra - montoDescuento;

    let resultado = "Porcentaje de descuento obtenido: " + porcentajeDescuento + "%<br>" +
                    "Monto del descuento: $" + montoDescuento.toFixed(2) + "<br>" +
                    "Monto final de la compra después del descuento: $" + montoFinal.toFixed(2);

    document.querySelector("resultado").innerHTML = resultado;
}