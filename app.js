
//1. Primero: Captura de variables

const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputModel = document.querySelector('#inputModel');
const inputMovie = document.querySelector('#inputMovie');
const boxTransformers = document.querySelector('#box-transformers');

//5. Quinto: Generar un objeto con la selección de la búsqueda para comparar con objeto de base de datos

const datosBusqueda = {
    nombre: '',
    modelo: '',
    peliculaId: '',
}


//2. Segundo: Crear el evento para mostrar información cuando se cargue la página.
document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(transformers)
});


//4. Cuarto: Se crea el evento de envío del formulario. Aquí se hace el filtro.
formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();

        //6. Sexto. Se asignan los datos de input a datos de busqueda
        datosBusqueda.nombre = inputName.value.toLowerCase();
        datosBusqueda.modelo = inputModel.value;
        datosBusqueda.peliculaId = inputMovie.value;

    console.log(datosBusqueda);

    filtrarTransformers();

    formBusqueda.reset();
});



//7. Septimo: Se crea funcion para filtrar transformers

function filtrarTransformers (){

    const resultado = transformers.filter( filtrarName ).filter( filtrarModelo ).filter( filtrarMovie );

    //11. trabajar cuando no haya resultados
   
        if(resultado.length){
            mostrarHTML(resultado)
        } else{
            sinResultado();
        }

    // Object.values() obtiene los valores del objecto en cuestión.*
    const hayContenido = Object.values(datosBusqueda).filter( (e) => e );


    if(hayContenido.length){
        mostrarHTML(resultado)
    } else{
        sinResultado();
    }

    //console.log(resultado)
    //mostrarHTML(resultado)
}

//12. Crear funcion sin resultado
function sinResultado (){

    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultado.textContent = 'No hay resultados';
    boxTransformers.parentElement.appendChild(sinResultado);

}


//8. Octavo: Generar las funciones que va a recibir filter
function filtrarName(transformer) {
    const { nombre } = datosBusqueda;

    if (nombre) {
        return transformer.nombre == nombre;   //regresa coincidencias
    }

    return transformer;
}

function filtrarModelo(transformer) {
    const { modelo } = datosBusqueda;

    if (modelo) {
        return transformer.modelo == modelo;
    }

    return transformer;
}

function filtrarMovie(transformer) {
    const { peliculaId } = datosBusqueda;

    if (peliculaId) {
        return transformer.peliculaId == peliculaId;
    }

    return transformer;
}

//9. Generar función limpiar y agregar a mostrarHTML
function limpiarHTML(){
    while(boxTransformers.firstChild){
        boxTransformers.firstChild.remove();
    }
}


//3. Tercero: Crear Función, Recorrer el array de objetos y mostrar el HTML

function mostrarHTML(transformers){

    //10. agregar función limpiar a mostrarHTML
    limpiarHTML();

    //console.log(transformers);

    transformers.forEach( transformer => {
        const {nombre, modelo, peliculaName, descripcion, image} = transformer;

        const cardTransformer = document.createElement('div');
        cardTransformer.classList.add('col', 'mb-3','d-flex');
        cardTransformer.innerHTML = `
            <div class="card bg-secondary flex-row rounded-3">
                <div class="w-50">
                    <img src="${image}" class="img-fluid object-fit" alt="">
                </div>
                <div class="card-body w-50">
                    <h5 class="card-title"></h5>
                    <h2 class="card-text mb-0 text-capitalize"><span>${nombre}</span>.</h2>
                    <p class="card-text mb-3 text-capitalize"><span>${modelo}</span>.</p>
                    <p class="card-text mb-3 text-capitalize"><b>Primera Aparición:</b> <span>${peliculaName}</span>.</p>
                    <p class="card-text mb-0"><b>Descripción:</b><br> <span>${descripcion}</span></p>
                </div>
            </div>
        `;

        boxTransformers.appendChild(cardTransformer);
    });

    
}


