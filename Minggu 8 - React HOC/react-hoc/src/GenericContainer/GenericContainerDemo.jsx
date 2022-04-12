import React, { Component } from 'react';
import GenericContainer from './GenericContainerHOC.jsx';

class GenericContainerDemo extends Component {
    render() {
        const ContactListWithGenericContainer = GenericContainer({ reqUrl: 'https://demo1769683.mockable.io/users', reqMethod: 'GET', resName: 'contacts' })(ContactList);
        return (<div className="contactApp">

            <ContactListWithGenericContainer />
        </div>
        )
    }
}
const ContactList = ({ contacts }) => {
    return (
        <div>

            <ul>
                {contacts.map(
                    (contact) => <li key={contact.email}>
                        <img src={contact.photo} width="135px" height="100px" a
                            lt="presentation" />
                        <div className="contactData">
                            <h4>{contact.name}</h4>
                            <small>{contact.email}</small> <br /><small> {contact.phone}</small>
                        </div>
                        <br></br>

                    </li>
                )}
            </ul>
        </div>
    )
}
export default GenericContainerDemo;
