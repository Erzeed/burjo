import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const customToast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const succes = () => {
  customToast.fire({
    title: 'Post Succesfull',
    icon: 'success',
  });
};
export const error = (title) => {
  customToast.fire({
    title: `${title}`,
    icon: 'error',
  });
};

