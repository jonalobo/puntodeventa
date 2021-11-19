//Declaración de los input como NodeList 
const entradas = document.querySelectorAll('input');
//Declaración del botón de agregar y prevenir su comportamiento por defecto
const btnAgregar = document.querySelector('.btn-agregar');
//Renderizar contenido en el DOM
const render = document.querySelector('.render')

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
        renderizar(productos)
    }
})

//Limpiar entradas inmediatamente despues de agregar el producto
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

//Función para renderizar el contenido del arreglo productos en el DOM
function renderizar(arreglo) {
    //Limpia el contenedor donde se insertara el objeto
    render.innerHTML = ''
    //Desestructuracion del objeto producto
    arreglo.forEach(objeto => {
        const { nombre, precio } = objeto
        const HTML = `<li>${nombre}<span>${precio}</span></li>`
        //Inserción en el HTML
        render.innerHTML += HTML
    });
}