// Definir las calificaciones de los alumnos
// const calificaciones = {
//     luca: 6,
//     maria: 3,
//     jose: 4,
//     carla: 7,
//     pedro: 9,
//   };
  
//   Función para determinar si un alumno está aprobado o desaprobado
//   function determinarEstado(calificacion) {
//     if (calificacion <= 5) {
//       return "Desaprobado";
//     } else {
//       return "Aprobado";
//     }
//   }
  
//   Solicitar al usuario que ingrese el nombre del alumno
//   const nombreAlumno = prompt("Ingresa el nombre del alumno:");
  
//   Verificar si el nombre ingresado existe en el objeto calificaciones
//   if (calificaciones.hasOwnProperty(nombreAlumno)) {
//     Obtener la calificación y estado del alumno
//     const calificacion = calificaciones[nombreAlumno];
//     const estado = determinarEstado(calificacion);
  
// Mostrar un alert con la calificación y el estado
// alert(`${nombreAlumno}: Calificación ${calificacion} - ${estado}`);
// } else {
//   Mostrar un alert si el nombre ingresado no existe en las calificaciones
//   alert(`No se encontró al alumno con el nombre ${nombreAlumno}`);
// }

// Definir estudiantes como un array
const estudiantes = [
  { nombre: "Luca", notas: [9, 8, 9] },
  { nombre: "María", notas: [8, 3, 8] },
  { nombre: "Jose", notas: [7, 8, 9] },
  { nombre: "Pedro", notas: [4, 7, 2] },
  { nombre: "Carla", notas: [8, 9, 9] }
];

function evaluarCursado() {
  // Pedir al usuario que ingrese el nombre del alumno
  let nombreAlumno = prompt("Ingrese el nombre del alumno:");

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
  if (nota1 >= 6 && nota2 >= 6 && nota3 >= 6) {
    alert(`${nombreAlumno} aprobó los tres módulos. ¡Felicidades!`);
  } else if (nota1 < 6 && nota2 >= 6 && nota3 >= 6) {
    alert(`${nombreAlumno} desaprobó el primer módulo y debe recuperarlo.`);
  } else if (nota1 >= 6 && nota2 < 6 && nota3 >= 6) {
    alert(`${nombreAlumno} desaprobó el segundo módulo y debe recuperarlo.`);
  } else if (nota1 >= 6 && nota2 >= 6 && nota3 < 6) {
    alert(`${nombreAlumno} desaprobó el tercer módulo y debe recuperarlo.`);
  } else if (nota1 < 6 && nota2 < 6 && nota3 >= 6) {
    alert(`${nombreAlumno} desaprobó los dos primeros módulos y está aplazado.`);
  } else if (nota1 >= 6 && nota2 < 6 && nota3 < 6) {
    alert(`${nombreAlumno} desaprobó el segundo y tercer módulo y está aplazado.`);
  } else if (nota1 < 6 && nota2 >= 6 && nota3 < 6) {
    alert(`${nombreAlumno} desaprobó el primer y tercer módulo y está aplazado.`);
  } else {
    alert(`${nombreAlumno} desaprobó los tres módulos. Está aplazado.`);
  }
}

// Llamar a la función para iniciar la evaluación del cursado
evaluarCursado();
