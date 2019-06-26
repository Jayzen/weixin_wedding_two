import {
    HTTP
}
from '../utils/http'

class ContactModel extends HTTP {
    data = null
    createContact(name, telephone) {
        return this.request({
            method: 'POST',
            url: 'contact',
            data: {
                name: name,
                telephone: telephone
            }
        })
    }

    getContacts() {
        return this.request({
            url: 'contacts',
        })
    }
}

export {
    ContactModel
}