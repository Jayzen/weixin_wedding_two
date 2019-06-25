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
        photograph: null
    },

    onLoad: function (options) {
        const bid = options.bid
        console.log("hello world")
        console.log(options)
        
        if(options.type == "carousel"){
            carouselModel.getSort(bid)
                .then(res => {
                    this.setData({
                        photograph: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } else if (options.type == "home") {
            carouselModel.getHomePhotograph(bid)
                .then(res => {
                    this.setData({
                        photograph: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } else if (options.type == "state") {
            stateModel.getState(bid)
                .then(res => {
                    this.setData({
                        photograph: res
                    })
                })
                .catch(res => {
                    console.log(res);
                })
        } 
    },

    onShareAppMessage: function () {
    }
})