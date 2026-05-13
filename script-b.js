// Script para login y mostrar reserva

const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('loginSection');
const reservaSection = document.getElementById('reservaSection');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  // Login simple simulado (puedes conectar con backend luego)
  if (usuario === 'usuario' && contrasena === '1234') {
    alert('Login exitoso');
    loginSection.style.display = 'none';
    reservaSection.style.display = 'block';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

// Opcional: manejar reserva (por ejemplo mostrar mensaje)
const reservaForm = document.getElementById('reservaForm');
reservaForm.addEventListener('submit', function (e) {
  e.preventDefault();

  alert('¡Reserva realizada con éxito! Gracias por usar CanchaFútbolApp.');

  // Reset form
  reservaForm.reset();
});

const imagenes = document.querySelectorAll('.galeria .imagenes img');
const popup = document.getElementById('popupImagen');
const imgAmpliada = document.getElementById('imagenAmpliada');
const cerrarPopup = document.getElementById('cerrarPopup');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    imgAmpliada.src = img.src;
    popup.style.display = 'flex';
  });
});

cerrarPopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
