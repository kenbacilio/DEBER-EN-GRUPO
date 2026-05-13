document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usuarioIngresado = document.getElementById("usuario").value.trim();
    const contrasenaIngresada = document
      .getElementById("contrasena")
      .value.trim();

    const usuarioValido = "usuario";
    const contrasenaValida = "1234";

    if (
      usuarioIngresado === usuarioValido &&
      contrasenaIngresada === contrasenaValida
    ) {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("reservaSection").style.display = "block";
    } else {
      alert("Credenciales incorrectas");
    }
  });

document
  .getElementById("reservaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Reserva exitosa!");
  });
