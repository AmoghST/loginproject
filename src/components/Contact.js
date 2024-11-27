import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleClick = () => {
    toast.success("Success Notification!");
    toast.error("Error Notification!");
  };

  return (
    <div>
      <h1>React-Toastify Example</h1>
      <button onClick={handleClick}>Show Notifications</button>
      <ToastContainer />
    </div>
  );
}

export default Contact
