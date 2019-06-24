import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({

    data: {
        sort: null
    },

    onLoad: function (options) {
        const bid = options.bid
        carouselModel.getSort(bid)
            .then(res => {
                this.setData({
                    sort: res
                })
            })
            .catch(res => {
                console.log(res);
            })
    },

    onShareAppMessage: function () {
    }
})