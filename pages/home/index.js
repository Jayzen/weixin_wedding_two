import {
    CarouselModel
} from '../../models/carousel'
import {
    TopModel
} from '../../models/top'
import {
    StateModel
} from '../../models/state'


const carouselModel = new CarouselModel()
const topModel = new TopModel()
const stateModel = new StateModel()

Page({
    data: {
        carousels: null,
        top: null,
        photographs: null,
        states: null,
        loadingCenter: true
    },

    onLoad: function () {
        carouselModel.getCarousels()
            .then(res => {
                this.setData({
                    carousels: res
                })
                return topModel.getTop()
            })
            .then(res => {
                this.setData({
                    top: res
                })
                return stateModel.getStates()
            })
            .then(res => {
                this.setData({
                    loadingCenter: false,  
                    states: res

                })
            })
            .catch(res => {
                console.log(res);
            })
    },
  
    onShareAppMessage: function () {
    }
})
