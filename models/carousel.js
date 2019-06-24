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
    getSort(id){
        return this.request({
            url: 'tap_sorts/' + id
        })
    }
}

export {
    CarouselModel
}