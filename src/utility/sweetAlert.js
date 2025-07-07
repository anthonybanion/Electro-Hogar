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

export const SweetConfirm = async () => {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "Vas a vaciar el carrito de compras",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, vaciar carrito",
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "¡Listo!",
      text: "Tu carrito ha sido vaciado.",
      icon: "success"
    });
    return true;
  }

  return false;
};