alert("Bienvenido a Viajarg tu agencia de viajes");
let nombreUsuario = prompt("Por favor ingrese su nombre");
let opcionMenu = 0;
let ofertas = `"${nombreUsuario}, actualmente contamos con 20% de descuento con la compra de dos pasajes comunicate al 1131056688 para saber más"`;

function mostrarOfertas(ofertas) {
    alert(ofertas)
} 

while (opcionMenu != 3) {
    opcionMenu = prompt(`"Estimado/a ${nombreUsuario} Elija la opción deseada. (1. Consultar destinos disponibles, 2.Consultar ofertas, 3. Salir"`);
    switch(opcionMenu) {
        case "1":
            let destinos = prompt("contamos con los siguientes destinos disponibles elige el deseado (1. Bariloche, 2. El Bolson, 3. Villa La Angostura");
            if (destinos == "1") {
                alert("Los pasajes a bariloche tiene un valor de 1000U$D");
                eleccionBariloche = parseInt(prompt("elige si: (1. quiere comprarlos en 1 pago, 2. desea comprarlos en cuotas, 3.salir"));
                    if (eleccionBariloche == 1) {
                        alert(`"${nombreUsuario}, su compra por el valor de 1000U$D en un pago fue un éxito"`);
                    }
                    if (eleccionBariloche == 2) {
                        cuotasBariloche = parseInt(prompt("actualmente contamos con 3 cuotas quedando un valor de 1200U$D, 1). confirmar, 2) cancelar"));
                        if (cuotasBariloche == 1) {
                            alert(`"${nombreUsuario}, su compra en 3 cuotas por un valor de 1200U$D fue un éxito"`);
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        break;
                    }
            }        
            if (destinos == 2){
                alert("Los pasajes a El Bolson tiene un valor de 1200 U$D");
                eleccionElBolson = parseInt(prompt("elige si: (1. quiere comprarlos en 1 pago, 2. desea comprarlos en cuotas, 3.salir"));
                    if (eleccionElBolson == 1) {
                        alert(`"${nombreUsuario}, su compra por el valor de 1200U$D en un pago fue un éxito"`);
                    }
                    if (eleccionElBolson == 2) {
                        cuotasElBolson = parseInt(prompt("actualmente contamos con 3 cuotas quedando un valor de 1460U$D, 1). confirmar, 2) cancelar"));
                        if (cuotasElBolson == 1) {
                            alert(`"${nombreUsuario}, su compra en 3 cuotas por un valor de 1460U$D fue un éxito"`);
                        }
                        else {
                            break;
                        }

                    }
                    else {
                        break;
                    }
            }    
            if (destinos =="3"){
                alert("Los pasajes a Villa La Angostura tiene un valor de 1300 U$D");
                eleccionVillaAngostura = parseInt(prompt("elige si: (1. quiere comprarlos en 1 pago, 2. desea comprarlos en cuotas, 3.salir"));
                    if (eleccionVillaAngostura == 1) {
                        alert(`"${nombreUsuario}, su compra por el valor de 1300U$D en un pago fue un éxito"`);
                    }
                    if (eleccionVillaAngostura == 2) {
                        cuotasVillaAngostura = parseInt(prompt("actualmente contamos con 3 cuotas quedando un valor de 1496U$D, 1). confirmar, 2) cancelar"));
                        if (cuotasVillaAngostura == 1) {
                            alert(`"${nombreUsuario}, su compra en 3 cuotas por un valor de 1496U$D fue un éxito"`);
                        }
                        else {
                            break;
                        }

                    }
                    else {
                        break;
                    }
            }
            break;
        case "2":
            mostrarOfertas(ofertas);
            break;

        case "3":
            alert(`"Muchas gracias ${nombreUsuario} por utilizar nuestros servicios"`);
            break;
    }
}