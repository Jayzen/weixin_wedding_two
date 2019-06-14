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
    getDetails(id) {
        return this.request({
            url: 'tap_carousel_photographs/' + id
        })
    }
    getCarouselPhotographs(id) {
        return this.request({
            url: 'tap_carousel_photographs/'
        })
    }
}

export {
    CarouselModel
}