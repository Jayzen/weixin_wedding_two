import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({

    data: {
        tap_carousel_photographs: null
    },

    onLoad: function (options) {
        const bid = options.bid
        carouselModel.getCarousel(bid)
            .then(res => {
                this.setData({
                    tap_carousel_photographs: res
                })
            })
            .catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        console.log(bid)
        wx.navigateTo({
            url: `/pages/tap-carousel-detail/index?bid=${bid}`
        })
    },
  
    onShareAppMessage: function () {
    }
})