import {
    LocationModel
} from '../../models/location'
import {
    BasicModel
} from '../../models/basic'

const locationModel = new LocationModel()
const basicModel = new BasicModel()

Page({
    data: {
        location: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
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
    }
})