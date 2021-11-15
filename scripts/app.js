//Declaración de los input como NodeList 
const entradas = document.querySelectorAll('input');
//Declaración del botón de agregar y prevenir su comportamiento por defecto
const btnAgregar = document.querySelector('.btn-agregar');

//Arreglo de objetos creados desde los input
const productos = [];

btnAgregar.addEventListener('click', (e)=>{
    e.preventDefault()
    //Asegurarse señalar el contenido del input
    const nombre = entradas[0];
    const precio = entradas[1];
    const cantidad = entradas[2];
    const serie = entradas[3];

    if (validacion(nombre.value,precio.value,cantidad.value,serie.value)) {
        //Se crea el objeto con el orden asignado.
        const objProductos = {
            nombre: nombre.value,
            precio: precio.value,
            cantidad: cantidad.value,
            serie: serie.value
        };
        //Luego el objeto se añade al arreglo global productos
        productos.push(objProductos);
        limpiar(nombre,precio,cantidad,serie)
        console.log(productos)
    }
})

//Limpiar entradas
function limpiar(nombre,precio,cantidad,serie)  {
    nombre.value = ''
    precio.value = ''
    cantidad.value = ''
    serie.value = ''
}

//Validar los datos ingresados en los inputs
function validacion(nombre,precio,cantidad,serie) {
    if(nombre != '' && precio != '' && cantidad != '' && serie != ''){
        return nombre, precio, serie, cantidad
    } else {
        alert('Debes agregar todos los datos')
    }
}