var firebaseConfig = {
    apiKey: "AIzaSyDXR4x1rOj77ho74nZ3N_Rw3AmrzWQ2Jr0",
    authDomain: "proyectoweb-hotelys.firebaseapp.com",
    databaseURL: "https://proyectoweb-hotelys.firebaseio.com",
    projectId: "proyectoweb-hotelys",
    storageBucket: "proyectoweb-hotelys.appspot.com",
    messagingSenderId: "459843385871",
    appId: "1:459843385871:web:8f2827bac1c44eb50c417a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var idUsuario = document.getElementById('id');
var txtname = document.getElementById('name');
var apellidos = document.getElementById('apellidos');
var listaDocente = document.getElementById('listaDocente');
var opcion = document.getElementById('rol');

var btnAgregar = document.getElementById('btnAgregar');
var btnActualizar = document.getElementById('btnActualizar');

function agregarDatos(user) {
    leerDatos();
    db.collection("docentes").add({
        nombre: txtname.value,
        apellido: apellidos.value,
        rol: opcion.value
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    //console.log(`El nombre es: ${txtname.value} y el apellido es: ${apellidos.value}`);
}

leerDatos();

function leerDatos() {
    listaDocente.innerHTML = "";
    btnActualizar.classList.add('d-none');

    db.collection("docentes").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaDocente.innerHTML += `
                    <tr>
                        <td>${doc.data().nombre}</td>
                        <td>${doc.data().apellido}</td>
                        <td>${doc.data().rol}</td>
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
    db.collection("docentes").doc(id).delete()
        .then(() => {
            console.log("Documento eliminado");
            leerDatos();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}

function editar(id) {
    btnAgregar.classList.add('d-none');
    btnActualizar.classList.remove('d-none');
    db.collection("docentes").doc(id).get()
        .then((doc) => {
            idUsuario.value = id;
            txtname.value = doc.data().nombre;
            apellidos.value = doc.data().apellido;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

function actualizarDatos() {
    db.collection("docentes").doc(idUsuario.value).update({
        nombre: txtname.value,
        apellido: apellidos.value,
        rol: opcion.value
    })
        .then(() => {
            limpiarDatos()
            leerDatos();
            btnActualizar.classList.add('d-none');
            btnAgregar.classList.remove('d-none');
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        });;

}

function limpiarDatos() {
    txtname.value = "";
    apellidos.value = "";
}