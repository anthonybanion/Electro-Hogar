import Swal from 'sweetalert2'

export function SweetBasic(title, text, icon, textButton) {
  console.log("🔥 SweetBasic llamado con:", { title, text, icon, textButton });
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: textButton
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

export const SweetConfirm = async ({ text, confirmButtonText, text2 }) => {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "¡Listo!",
      text: text2,
      icon: "success"
    });
    return true;
  }

  return false;
};