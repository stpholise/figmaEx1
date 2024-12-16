// import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  // toast.error('🦄 Wow so easy!', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: false,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   });
  //   console.log('toast')
  const notify = () => toast.error("Wow so easy!");

  return (
    <div>
       <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
     
    </div>
  )
}

export default Toast