import Swal from "sweetalert2";

const SweetAlert = {
  messageError: (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "error",
      confirmButtonColor: "#ff0000",
      confirmButtonText: "OK",
      toast: true,
    });
  },

  messageOk: (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      toast: true,
    });
  },

  messageDelete: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire(
          "Eliminado!",
          "La eliminación se produjo satisfactoriamente!",
          "success",
        );
      }
    });
  },
  messageLoginOk: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok!",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire("Login correcto!", "success");
      }
    });
  },
  messageCloseSession: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión!",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire(
          "Sesión cerrada!",
          "La sesión se cerró satisfactoriamente!",
          "success",
        );
      }
    });
  },
};

export default SweetAlert;
