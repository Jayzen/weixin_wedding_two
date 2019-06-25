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
    getState(id) {
        return this.request({
            url: 'states/' + id
        })
    }
}

export {
    StateModel
}