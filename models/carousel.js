import {
    HTTP
}
from '../utils/http'

class CarouselModel extends HTTP {
    data = null
    getCarousels() {
        return this.request({
            url: 'tap_carousels'
        })
    }
    getCarousel(id) {
        return this.request({
            url: 'tap_carousels/' + id
        })
    }
    getPhotograph(id){
        return this.request({
            url: 'tap_photographs/' + id
        })
    }
    getHomePhotograph(id) {
        return this.request({
            url: 'home_photographs/' + id
        })
    }
}

export {
    CarouselModel
}