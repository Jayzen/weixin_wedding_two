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
import {
    BasicModel
} from '../../models/basic'
import {
    LocationModel
} from '../../models/location'

const homePhotographModel = new HomePhotographModel()
const carouselModel = new CarouselModel()
const topModel = new TopModel()
const stateModel = new StateModel()
const basicModel = new BasicModel()
const locationModel = new LocationModel()

Page({
    data: {
        basic: null,
        location: null,
        carousels: null,
        top: null,
        states: null,
        homePhotographs: null,
        loadingCenter: true,
        logoName: '象湖 摄影'
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
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
                callback && callback();
                return basicModel.getBasic();
            })
            .then(res=>{
                this.setData({
                    basic: res
                })
                return locationModel.getLocation();
            })
            .then(res=>{
                this.setData({
                    location: res
                })
            })
            
            .catch(res => {
                console.log(res);
            })
    },

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    },
  
    onShareAppMessage: function () {
    }
})
