import React from 'react';
import ModalC from './ModalC';

const ModalA = (contacts) => {
    const [modalC, setModalC] = useState(false);
    return (
        <div>
            {contacts.map((contact, index) => {
                <div key={index}>
                    <p>{contact.phone}</p>
                    <button onClick={() => setModalC(true)}>Close</button>
                    {modalC && <ModalC contact={contact} />}</div>
            })}
        </div>
    )
}

export default ModalA