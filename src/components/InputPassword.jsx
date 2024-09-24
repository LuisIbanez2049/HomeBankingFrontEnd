import React from 'react'
import { useState } from 'react';

function InputPassword({ value, onChange}) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };


  return (
    <div>
      <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"

          value={value}
          onChange={(e) => onChange(e.target.value)}

          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
          onInvalid={(e) => {
            if (e.target.value === "") {
              e.target.setCustomValidity(
                "Please fill in this field."
              );
            }
          }}
          onInput={(e) => e.target.setCustomValidity("")} //Restaura el mensaje predeterminado
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
        >
          {passwordVisible ?  <i id='eyeShow' className="fa-regular fa-eye"></i> :  <i className="fa-regular fa-eye-slash"></i>}
        </button>
      </div>
    </div>
  )
}

export default InputPassword