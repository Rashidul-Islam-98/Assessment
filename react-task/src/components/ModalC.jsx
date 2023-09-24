import React from 'react'

const ModalC = (contact) => {
  return (
    <div>
        <p>{contact.phone}</p>
        <p>{contact.country.name}</p>
    </div>
  )
}

export default ModalC