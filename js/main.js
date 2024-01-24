// Obtener la lista de estudiantes desde localStorage o inicializarla si no existe
let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [
  { nombre: "Luca", notas: [9, 8, 9] },
  { nombre: "María", notas: [8, 3, 8] },
  { nombre: "Jose", notas: [7, 8, 9] },
  { nombre: "Pedro", notas: [4, 7, 2] },
  { nombre: "Carla", notas: [8, 9, 9] }
];

function guardarEstudiantesEnStorage() {
  // Almacenar la lista de estudiantes en localStorage
  localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

function evaluarCursado() {
  let nombreAlumno = document.getElementById('nombreAlumno').value;

  // Verificar si el nombre del alumno es válido
  if (!nombreAlumno) {
      alert("Nombre de alumno inválido. Por favor, vuelva a intentar.");
      return;
  }

  // Convertir el nombre ingresado a minúsculas
  nombreAlumno = nombreAlumno.toLowerCase();

  // Encontrar al estudiante en la lista
  let estudiante = estudiantes.find(est => est.nombre.toLowerCase() === nombreAlumno);

  // Verificar si el estudiante fue encontrado
  if (!estudiante) {
      alert("No se encontró al estudiante con el nombre proporcionado. Verifique e intente nuevamente.");
      return;
  }

  // Obtener las notas del estudiante
  let [nota1, nota2, nota3] = estudiante.notas;

  // Evaluar la condición final del cursado
  let resultadoMensaje = "";
  if (nota1 >= 6 && nota2 >= 6 && nota3 >= 6) {
      resultadoMensaje = `${nombreAlumno} aprobó los tres módulos. ¡Felicidades!`;
  } else if (nota1 < 6 && nota2 >= 6 && nota3 >= 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó el primer módulo y debe recuperarlo.`;
  } else if (nota1 >= 6 && nota2 < 6 && nota3 >= 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó el segundo módulo y debe recuperarlo.`;
  } else if (nota1 >= 6 && nota2 >= 6 && nota3 < 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó el tercer módulo y debe recuperarlo.`;
  } else if (nota1 < 6 && nota2 < 6 && nota3 >= 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó los dos primeros módulos y está aplazado.`;
  } else if (nota1 >= 6 && nota2 < 6 && nota3 < 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó el segundo y tercer módulo y está aplazado.`;
  } else if (nota1 < 6 && nota2 >= 6 && nota3 < 6) {
      resultadoMensaje = `${nombreAlumno} desaprobó el primer y tercer módulo y está aplazado.`;
  } else {
      resultadoMensaje = `${nombreAlumno} desaprobó los tres módulos. Está aplazado.`;
  }

  // Mostrar el resultado en el DOM
  document.getElementById('resultadoContainer').innerHTML = `<p>${resultadoMensaje}</p>`;

  // Guardar la lista de estudiantes actualizada en el almacenamiento local
  guardarEstudiantesEnStorage();
}

// Llamar a la función para iniciar la evaluación del cursado cuando se haga clic en un botón (evento del usuario)
document.getElementById('evaluarButton').addEventListener('click', evaluarCursado);
