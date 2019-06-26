import {
    CarouselModel
} from '../../models/carousel'
import {
    StateModel
} from '../../models/state'

const stateModel = new StateModel()
const carouselModel = new CarouselModel()

Page({

    data: {
        photographs: null
    },

    onLoad: function (options) {
        const bid = options.bid
                
        if(options.type == "photograph"){
          carouselModel.getPhotograph(bid)
                .then(res => {
                    this.setData({
                        photographs: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } else if (options.type == "home") {
            carouselModel.getHomePhotograph(bid)
                .then(res => {
                    this.setData({
                        photographs: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } else if (options.type == "state") {
            stateModel.getState(bid)
                .then(res => {
                    this.setData({
                        photographs: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } 
    },

    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },

    onShareAppMessage: function () {
    }
})