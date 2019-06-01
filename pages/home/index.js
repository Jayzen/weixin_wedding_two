import {
    LocationModel
} from '../../models/location'
import {
    CarouselModel
} from '../../models/carousel'
import {
    BasicModel
} from '../../models/basic'

const locationModel = new LocationModel()
const carouselModel = new CarouselModel()
const basicModel = new BasicModel()

Page({
    data: {
        location: null,
        carousels: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
                return carouselModel.getCarousels()
            })
            .then(res => {
                this.setData({
                    carousels: res
                })
                return basicModel.getBasic()
            })
            .then(res => {
                this.setData({
                    basic: res,
                    loadingCenter: false  
                })
            }).
            catch(res => {
                console.log(res);
            })
    },
  
    onShareAppMessage: function () {
    }
})
