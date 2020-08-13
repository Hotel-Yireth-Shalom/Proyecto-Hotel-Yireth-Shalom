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


 var listaCliente = document.getElementById('listaCliente');
 var nombre = document.getElementById('nombre');
 var apellido = document.getElementById('apellido');
 var correoelectronico = document.getElementById('correoelectronico');
 var telefono = document.getElementById('telefono');
 var fechaentrada = document.getElementById('fechaentrada');
 var tipohabitacion = document.getElementById('tipohabitacion');
 var btnreserva = document.getElementById('btnreserva');
 var btnActualizar = document.getElementById('btnActualizar');
 var idUsuario = document.getElementById('id');


 function agregarDatos(user) {
     leerDatos();
     db.collection("clientes").add({
             nombre: nombre.value,
             apellido: apellido.value,
             correoe_lectronico: correoelectronico.value,
             telefono: telefono.value,
             fecha_de_entrada: fechaentrada.value,
             tipo_habitacion: tipohabitacion.value,
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
                       <td>${doc.data().tipo_habitacion}</td>
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
             txtname.value = doc.data().nombre;
             apellidos.value = doc.data().apellido;
             correoelectronico.value = correoe_lectronico;
             telefono.value = doc.data().telefono;
             fecha_de_entrada.value = doc.data().fecha_de_entrada;
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
             tipo_habitacion: tipohabitacion.value,
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
     tipohabitacion.value = "";
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
        }
        else {
            window.location.href = 'index.html';
        }
    });
}