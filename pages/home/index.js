import {
    CarouselModel
} from '../../models/carousel'
import {
    TopModel
} from '../../models/top'
import {
    StateModel
} from '../../models/state'
import {
    HomePhotographModel
} from '../../models/home_photograph'


const homePhotographModel = new HomePhotographModel()
const carouselModel = new CarouselModel()
const topModel = new TopModel()
const stateModel = new StateModel()

Page({
    data: {
        carousels: null,
        top: null,
        states: null,
        homePhotographs: null,
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
                    states: res
                })
                return homePhotographModel.getHomePhotographs()
            })
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    homePhotographs: res
                })
            })
            .catch(res => {
                console.log(res);
            })
    },
  
    onShareAppMessage: function () {
    }
})
