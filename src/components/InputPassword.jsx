import React from 'react'
import { useState } from 'react';

function InputPassword({ value, onChange, borderColor, setColorErrorInputPassword, setShowInputPassword}) {

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
          onChange={(e) => {
            onChange(e.target.value)
            setColorErrorInputPassword('')
            setShowInputPassword('hidden')
          }}
          className={`w-full px-3 py-2 ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter your password"
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