import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {
    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const allContactsURL = 'https://contact.mediusware.com/api/contacts/';
    const usContactsURL = 'https://contact.mediusware.com/api/country-contacts/United%20States/';

    const loadContacts = async (url) => {
        try {
            setLoading(true);
            const response = await axios.get(url, { params: { page: currentPage } });
            const newContacts = response.data;
            setContacts((prevContacts) => [...prevContacts, ...newContacts]);
            setCurrentPage(currentPage + 1);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };


    useEffect(() => {
        if (modalA) {
            loadContacts(allContactsURL);
        } else if (modalB) {
            loadContacts(usContactsURL);
        }
    }, [modalA, modalB]);


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setModalA(true)}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => setModalB(true)}>US Contacts</button>
                </div>

                {modalA && <ModalA contacts={contacts} />}
                {modalB && <ModalB contacts={contacts} />}

            </div>
        </div>
    );
};

export default Problem2;