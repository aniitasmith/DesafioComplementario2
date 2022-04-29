class Item {
    constructor(id, nombre, detalle, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = detalle;
        this.precio = precio;
        this.cantPedida = 0;
    }
    agregarPedido(cantidad) {
        this.cantPedida += cantidad;
    }
    calcularPrecio() {
        return this.cantPedida * this.precio;
    }
}

const calcularIva = (subtotalCompra) => {
    return (subtotalCompra * 0.21);

}

const validarCantidad = (cantidad) => {
    if (Number.isNaN(parseInt(cantidad))) {
        return 0;
    } else {
        return parseInt(cantidad);
    }
}

const crearMensaje = () => {
    let encabezado = (` ** ** ** ** TOTAL DE COMPRA ** ** ** ** \n`);
    for (item of listadosItems) {
        if (item.cantPedida > 0) {
            subtotalCompra += item.calcularPrecio();
            mensaje += (` ${item.nombre}    Cantidad = ${item.cantPedida}       $ ${item.calcularPrecio()}\n`)
        }
    }
    let iva = calcularIva(subtotalCompra);
    let totalCompra = iva + subtotalCompra;

    let final = (`IVA $ ${iva}\n TOTAL $ ${totalCompra.toFixed(2)}`);

    return (` ${encabezado} ${mensaje} ${final}`);
}

const cuaderno = new Item(1, "Cuaderno / NoteBook", "3 Subject Notebook / Assorted Colours / 300 Pages", 5);
const lapiz = new Item(2, "Lapiz / Lead Pencils", "2HB / 10 units per pack", 1);
const boligrafo = new Item(3, "Boligrafo / Ball Pens", "Ballpoint Stick Pens / 10mm Blue / 12 per Pack", 1.5);
const marcador = new Item(4, "Marcadores Permanentes / Permanent markers", "Permanent Markers Fine Tip Black / 12 per Pack", 7.5);
const cinta = new Item(5, "Cinta Adhesiva / Invisible Tape ", "Invisible Tape with Dispenser / 19 mm x 127 m / 4 per Pack", 6.5);
const pegamento = new Item(6, "Pega Escolar / School glue", "School Glue 118mL", 1);
const papel = new Item(7, "Resma de Papel / Paper", "Multiuse Paper 20 lb White / 500 Sheets", 8);
const resaltador = new Item(8, "Resaltadores / Highlighters", "Style Highlighters Assorted Colours 5 per Pack", 3.5);
const clip = new Item(9, "Clips / Paper Clips", "Paper Clips / 100 Clips Per Box / 5 per Pack", 4.5);
const carpeta = new Item(10, "Carpetas / Folders", "Assorted File Folders Letter Size / 10 per Pack", 3.5);

let listadosItems = [cuaderno, lapiz, boligrafo, marcador, cinta, pegamento, papel, resaltador, clip, carpeta];
let subtotalCompra = 0;

let listado = ""
for (const item of listadosItems) {
    listado += (`${item.id}. ${item.nombre} ($${item.precio}).\n`);
}

// COMIENZA EL PROGRAMA 
do {
    let cantidad = 0;
    switch (parseInt(prompt(` ** SIMULADOR DE LIBRERIA ** 
    Ingrese el numero de la opcion del articulo que sea agregar al carrito 
    ${listado}`))) {
        case 1:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${cuaderno.nombre}:`)))
            cuaderno.agregarPedido(cantidad);
            break;

        case 2:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${lapiz.nombre}:`)))
            lapiz.agregarPedido(cantidad);
            break;

        case 3:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${boligrafo.nombre}:`)))
            boligrafo.agregarPedido(cantidad);
            break;

        case 4:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${marcador.nombre}:`)))
            marcador.agregarPedido(cantidad);
            break;

        case 5:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${cinta.nombre}:`)))
            cinta.agregarPedido(cantidad);
            break;

        case 6:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${pegamento.nombre}:`)))
            pegamento.agregarPedido(cantidad);
            break;

        case 7:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${papel.nombre}:`)))
            papel.agregarPedido(cantidad);
            break;

        case 8:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${resaltador.nombre}:`)))
            resaltador.agregarPedido(cantidad);
            break;

        case 9:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${clip.nombre}:`)))
            clip.agregarPedido(cantidad);
            break;

        case 10:
            cantidad = (validarCantidad(prompt(`Ingrese la cantidad de ${carpeta.nombre}:`)))
            carpeta.agregarPedido(cantidad);
            break;

        default:
            alert('El dato ingresado es invalido o no corresponde a ningun articulo');
            break;
    }
} while ((confirm(` Desea agregar un item mas a la compra?`)));

let mensaje = "";
alert(crearMensaje())