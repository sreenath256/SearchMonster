import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toasty() {
  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  };

  return (
    <div>
      <button onClick={notify}>Toasty</button>
    </div>
  );
}

export default Toasty;
