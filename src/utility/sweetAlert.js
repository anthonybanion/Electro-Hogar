import Swal from 'sweetalert2'

export function SweetBasic(titulo, text, icon, textoBoton) {
  Swal.fire({
    title: titulo,
    text: text,
    icon: icon,
    confirmButtonText: textoBoton
  })
}

export function sweetTimer(titulo) {
  Swal.fire({
    title: titulo,
    icon: 'success',
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: false,
    background: '#fefefe',
    color: '#333',
    customClass: {
      popup: 'minimal-alert'
    },
    didOpen: () => {
      // No mostrar loading ni nada extra
    }
  });
}