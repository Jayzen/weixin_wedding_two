import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({

    data: {
        tap_sorts: null
    },

    onLoad: function (options) {
        const bid = options.bid
        carouselModel.getCarousel(bid)
            .then(res => {
                this.setData({
                    tap_sorts: res
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
            url: `/pages/tap-detail/index?bid=${bid}&type=${type}`
        })
    },

    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },

    onShareAppMessage: function () {
    }
})