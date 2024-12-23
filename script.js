function calcularEdad() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    document.getElementById('edad').value = edad;
  }

 
 
  

      function cargarFechaActual() {
        var today = new Date();
        var day = ("0" + today.getDate()).slice(-2);
        var month = ("0" + (today.getMonth() + 1)).slice(-2);
        var todayString = today.getFullYear() + "-" + month + "-" + day;
        document.getElementById("fecha").value = todayString;
      }
  
      window.onload = function() {
        cargarFechaActual();
      }


      document.getElementById("BTNR").addEventListener("click", function() { setTimeout(cargarFechaActual, 0); });




 
 



document.getElementById('BTN').addEventListener('click', function(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('form'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxGSI7EEtGx9SFwzh2A2Ot3ukh0FTM6psKdMbApXbJlRvXMKxAV0P6J3NBiO973PoyL/exec');
    xhr.reload = function() {
      document.getElementById('form').reload(); 
     
    };
    xhr.send(formData);
    alert('¡Registro exitoso!');
    
  });



  function verificarContraseña() {
    var password = document.getElementById("password").value;
    if (password === "PQX") {
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
    } else {
        alert("Contraseña incorrecta");
    }
}