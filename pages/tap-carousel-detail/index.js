import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({

    data: {
        tap_carousel_details: null
    },

    onLoad: function (options) {
        const bid = options.bid
        carouselModel.getDetails(bid)
            .then(res => {
                this.setData({
                    tap_carousel_details: res
                })
            })
            .catch(res => {
                console.log(res);
            })
    },

    onShareAppMessage: function () {
    }
})