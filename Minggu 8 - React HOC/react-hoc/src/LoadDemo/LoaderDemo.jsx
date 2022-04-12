import React, { Component } from 'react';
import LoadIndicator from './LoaderHOC.jsx';
import './LoadIndicator.css';

class LoaderDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResults: [],
            contactList: []
        }
        this.handleUserInput = this.handleUserInput.bind(this);

    }
    handleUserInput(inputText) {
        this.setState({
            searchText: inputText,
        }, () => console.log(this.state))
    }
    componentWillMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://demo1769683.mockable.io/users', init)
            .then((response) => (response.json()))
            .then(
                (data) => {
                    console.log(data); this.setState(
                        prevState => ({
                            contactList: [...data.contacts]
                        })
                    )
                }
            )
    }

    render() {
        const ContactListWithLoadIndicator = LoadIndicator('contacts')(ContactList);
        return (<div className="contactApp">

            <ContactListWithLoadIndicator contacts={this.state.contactList} />
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

                        <img src={contact.photo} width="135px" height="100px" alt="presentat
ion" />
                        <div className="contactData">
                            <h4>{contact.name}</h4>
                            <small>{contact.email}</small> <br /><small> {contact.phone}</small
                            >
                        </div><br></br>
                        {console.log(contact)}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default LoaderDemo;
