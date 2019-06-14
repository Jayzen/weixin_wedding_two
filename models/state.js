import {
    HTTP
}
    from '../utils/http'

class StateModel extends HTTP {
    data = null
    getStates() {
        return this.request({
            url: 'states'
        })
    }
}

export {
    StateModel
}