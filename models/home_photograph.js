import {
    HTTP
}
    from '../utils/http'

class HomePhotographModel extends HTTP {
    data = null
    getHomePhotographs() {
        return this.request({
            url: 'home_photographs'
        })
    }
}

export {
    HomePhotographModel
}