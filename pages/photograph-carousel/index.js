import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({

    data: {
        tap_photographs: null
    },

    onLoad: function (options) {
        const bid = options.bid
        carouselModel.getCarousel(bid)
            .then(res => {
                this.setData({
                    tap_photographs: res
                })
            })
            .catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        const type = event.target.dataset.type
        console.log(event.target.dataset)
        wx.navigateTo({
            url: `/pages/photograph-detail/index?bid=${bid}&type=${type}`
        })
    },

    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },

    onShareAppMessage: function () {
    }
})