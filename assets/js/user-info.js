document.addEventListener("DOMContentLoaded", function() {
  // Obtener el correo electrónico del usuario autenticado (podrías obtenerlo de tu sistema de autenticación)
  var userEmail = 'luis@duocuc.cl'; // Reemplazar con el correo electrónico del usuario autenticado

  // Lista de usuarios
  var users = [
    { email: 'rafa@duocuc.cl', password: '123456', name: 'Rafael', lastName: 'Oteiza', phone: '123456789', comuna: 'Santiago', auto: 'Toyota Yaris' },
    { email: 'luis@duocuc.cl', password: '123456', name: 'Luis', lastName: 'Arenas', phone: '123456789', comuna: 'Santiago', auto: 'Peugeot 2008' },
    { email: 'matias@duocuc.cl', password: '123456', name: 'Matias', lastName: 'Garrido', phone: '123456789', comuna: 'Santiago', auto: 'Audi A3' }
  ];

  // Encontrar el usuario correspondiente al correo electrónico autenticado
  var authenticatedUser = users.find(function(user) {
    return user.email === userEmail;
  });

  // Si el usuario está autenticado, mostrar su información en la página usuario.html
  if (authenticatedUser) {
    document.getElementById("name").textContent = authenticatedUser.name;
    document.getElementById("lastName").textContent = authenticatedUser.lastName;
    document.getElementById("email").textContent = authenticatedUser.email;
    document.getElementById("phone").textContent = authenticatedUser.phone;
    document.getElementById("comuna").textContent = authenticatedUser.comuna;
    document.getElementById("auto").textContent = authenticatedUser.auto;
  } else {
    // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
    window.location.href = '../index.html'; // Reemplaza '../index.html' con la ruta correcta a tu página de inicio de sesión
  }
});
