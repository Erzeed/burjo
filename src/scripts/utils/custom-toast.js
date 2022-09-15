import Swal from 'sweetalert2';

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

