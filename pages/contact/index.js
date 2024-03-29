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
        this._loadData();
    },

    _loadData: function (callback) {
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
                callback && callback();
            }).
            catch(res => {
                console.log(res);
            })
    },

    onOfficial() {
        wx.navigateTo({
            url: `/pages/official-account/index`
        })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAddress: function (event) {
        wx.openLocation({
            latitude: parseFloat(this.data.location.latitude),
            longitude: parseFloat(this.data.location.longitude),
            name: this.data.location.name,
            address: this.data.location.address
        })
    },

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    }    
})