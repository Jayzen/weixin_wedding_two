import {
    HTTP
}
    from '../utils/http'

class TemplatetModel extends HTTP {
    data = null
    createContactTemplate(form_id, name, telephone) {
        return this.request({
            method: 'POST',
            url: 'contact_template',
            data: {
                form_id: form_id,
                name: name,
                telephone: telephone
            }
        })
    }
}

export {
    TemplatetModel
}
