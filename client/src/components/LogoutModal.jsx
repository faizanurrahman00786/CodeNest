import React, { useState } from 'react';

function LogoutModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    handleClose();
  };

  return (
    <>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleShow}>
        Logout
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-50 absolute inset-0" onClick={handleClose}></div>
          <div className="bg-white rounded-lg p-6 z-50 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2" onClick={handleClose}>
                Cancel
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogoutModal;
