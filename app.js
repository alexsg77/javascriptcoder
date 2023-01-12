const carrito = []

const ordenarMenorMayor = () => {
    bebidas.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

const ordenarMayorMenor = () => {
    bebidas.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaDeBebidas = bebidas.map(bebida => {
        return '- '+bebida.nombre+' $'+bebida.precio
    })
    alert('Lista de precios:'+'\n\n'+listaDeBebidas.join('\n'))
    comprarBebidas(listaDeBebidas)
};

const comprarBebidas = (listaDeBebidas) => {
    let bebidaNombre = ''
    let bebidaCantidad = 0
    let otraBebida = false

    do {
        bebidaNombre = prompt('¿Qué bebida desea comprar?'+'\n\n'+listaDeBebidas.join('\n'))
        bebidaCantidad = parseInt(prompt('¿Cuántas quieres comprar?'))

        const bebida = bebidas.find(bebida => bebida.nombre.toLowerCase() === bebidaNombre.toLowerCase())

        if (bebida) {
            agregarAlCarrito(bebida, bebida.id, bebidaCantidad)
        } else {
            alert('La bebida no se encuentra en nuestro catálogo!')
        }

        otraBebida = confirm('Desea agregar otra bebida?')
    } while (otraBebida);

    confirmarCompra()
};

const agregarAlCarrito = (bebida, bebidaId, bebidaCantidad) => {
    const bebidaRepetido = carrito.find(bebida => bebida.id === bebidaId)
    if (!bebidaRepetido) {
        bebida.cantidad += bebidaCantidad
        carrito.push(bebida)
    } else {
        bebidaRepetido.cantidad += bebidaCantidad
    }
};

const eliminarBebidaCarrito = (nombreBebidaAEliminar) => {
    carrito.forEach((bebida, index) => {
        if (bebida.nombre.toLowerCase() === nombreBebidaAEliminar.toLowerCase()) {
            if (bebida.cantidad > 1) {
                bebida.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaBebidas = carrito.map(bebida => {
        return '- '+bebida.nombre+' | Cantidad: '+bebida.cantidad
    })

    const isCheckout = confirm('Checkout: '
        +'\n\n'+listaBebidas.join('\n')
        +'\n\nPara continuar presione "Aceptar" sino "Cancelar" para eliminar una bebida del carrito de compras'
    )

    if (isCheckout) {
        finalizarCompra(listaBebidas)
    } else {
        const nombreBebidaAEliminar = prompt('Ingrese el nombre de la bebida a eliminar:')
        eliminarBebidaCarrito(nombreBebidaAEliminar)
    }
};

const finalizarCompra = (listaBebidas) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert('A continuación el detalle de su compra: '
        +'\n\n'+listaBebidas.join('\n')
        +'\n\nTotal de bebidas: '+cantidadTotal
        +'\n\nEl total de su compra es: '+precioTotal
        +'\n\nMuchas gracias por la compra'
    )
};

const comprar = () => {
    const bebidasBaratos = confirm('¿Desea ordenar la lista de bebidas de la más barata a la más cara?')

    if (bebidasBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


comprar()