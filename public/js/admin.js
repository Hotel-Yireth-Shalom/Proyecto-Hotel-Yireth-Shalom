 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAj7QPyNvuUrWWe9GBdXTwbb5aZAeoEzkc",
    authDomain: "hotel-yireth-shalom-florencia.firebaseapp.com",
    databaseURL: "https://hotel-yireth-shalom-florencia.firebaseio.com",
    projectId: "hotel-yireth-shalom-florencia",
    storageBucket: "hotel-yireth-shalom-florencia.appspot.com",
    messagingSenderId: "112301165076",
    appId: "1:112301165076:web:a386235bceca2f2644b501"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage();


var listaCliente = document.getElementById('listaCliente');
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var correoelectronico = document.getElementById('correoelectronico');
var telefono = document.getElementById('telefono');
var fechaentrada = document.getElementById('fechaentrada');
var fechasalida = document.getElementById('fechasalida');
var tipohabitacion = document.getElementById('tipohabitacion');
var estadoo = document.getElementById('estadoo');
var btnreserva = document.getElementById('btnreserva');
var btnActualizar = document.getElementById('btnActualizar');
var idUsuario = document.getElementById('id');

var archivo = document.getElementById('archivo');
var imgArchivo = document.getElementById('imgSudida');
var usuarioActual;


function agregarDatos(user) {
    leerDatos();
    db.collection("clientes").add({
            nombre: nombre.value,
            apellido: apellido.value,
            correoe_lectronico: correoelectronico.value,
            telefono: telefono.value,
            fecha_de_entrada: fechaentrada.value,
            fecha_de_salida: fechasalida.value,
            tipo_habitacion: tipohabitacion.value,
            estado_cliente: estadoo.value,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}


leerDatos();

function leerDatos() {
    listaCliente.innerHTML = "";
    btnActualizar.classList.add('d-none');
    db.collection("clientes").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaCliente.innerHTML += `
                  <tr>
                      <td>${doc.data().nombre}</td>
                      <td>${doc.data().apellido}</td>
                      <td>${doc.data().correoe_lectronico}</td>
                      <td>${doc.data().telefono}</td>
                      <td>${doc.data().fecha_de_entrada}</td>
                      <td>${doc.data().fecha_de_salida}</td>
                      <td>${doc.data().tipo_habitacion}</td>
                      <td>${doc.data().estado_cliente}</td>
                      <td>
                           <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                           <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                       </td>                  
                  </tr>           
              `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function eliminar(id) {
    db.collection("clientes").doc(id).delete()
        .then(() => {
            console.log("Documento eliminado");
            leerDatos();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}

function editar(id) {
    btnreserva.classList.add('d-none');
    btnActualizar.classList.remove('d-none');
    db.collection("clientes").doc(id).get()
        .then((doc) => {
            idUsuario.value = id;
            nombre.value = doc.data().nombre;
            apellido.value = doc.data().apellido;
            correoelectronico.value = doc.data().correoe_lectronico;
            telefono.value = doc.data().telefono;
            fechaentrada.value = doc.data().fecha_de_entrada;
            fechasalida.value = doc.data().fecha_de_salida;
            tipohabitacion.value = doc.data().tipo_habitacion;
            estadoo.value = doc.data().estado_cliente;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

function actualizarDatos() {
    db.collection("clientes").doc(idUsuario.value).update({
            nombre: nombre.value,
            apellido: apellido.value,
            correoe_lectronico: correoelectronico.value,
            telefono: telefono.value,
            fecha_de_entrada: fechaentrada.value,
            fecha_de_salida: fechasalida.value,
            tipo_habitacion: tipohabitacion.value,
            estado_cliente: estadoo.value,

        })
        .then(() => {
            limpiarDatos()
            leerDatos();
            btnActualizar.classList.add('d-none');
            btnreserva.classList.remove('d-none');
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        });;

}

function limpiarDatos() {
    nombre.value = "";
    apellido.value = "";
    correoelectronico.value = "";
    telefono.value = "";
    fechaentrada.value = "";
    fechasalida.value = "";
    tipohabitacion.value = "";
    estadoo.value = "";
}


//------------------------------------
function cerrarSesion() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            window.location.href = 'index.html';
        }).catch((error) => {
            console.log(error.message)
        });
}

function estado() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            emailUsuarioLogueado.innerHTML = user.email;
        } else {
            window.location.href = 'index.html';
        }
    });
}

//-----------------------------------------------


archivo.addEventListener('change', (e) => {
    var nombre = e.target.files[0].name;
    var tmp = URL.createObjectURL(e.target.files[0]);
    console.log("Evento: ", tmp);
    imgArchivo.src = tmp;
})

function subirImagen() {
    var archivoFile = archivo.files[0];
    var nombre = archivo.files[0].name;

    var uploadTask = storage.ref('imagenes/' + nombre).put(archivoFile)
        .then((img) => {
            console.log('Imagen subida ..', img.totalBytes);
            console.log(archivo.files[0].type)
        });

    storage.ref('imagenes/' + nombre).getDownloadURL()
        .then((urlImg) => {
            imgArchivo.src = urlImg;

            db.collection("docentes").doc('QfPiBxiTlI5LteTW7uhF').update({
                    imagen: urlImg
                })
                .then(() => {
                    console.log("Documento actualizado con imagen");
                })
                .catch((error) => {
                    console.log("Error: ", error);
                });


        });

}

