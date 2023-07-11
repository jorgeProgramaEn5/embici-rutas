import React from 'react'

export function PhoneValidation() {
  return (
    <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" value={phoneNumber} onChange={handleChange} />
    </div>
  )
}
