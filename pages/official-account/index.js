import {
    LocationModel
} from '../../models/location'
import {
    BasicModel
} from '../../models/basic'
import {
    OfficialAccountModel
} from '../../models/official_account'

const officialAccountModel = new OfficialAccountModel()
const locationModel = new LocationModel()
const basicModel = new BasicModel()

Page({
    data: {
        location: null,
        basic: null,
        official_accounts: null,
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
                })
                return officialAccountModel.getOfficialAccounts()
            })
            .then(res => {
                this.setData({
                    official_accounts: res,
                    loadingCenter: false
                })
            }).      
            catch(res => {
                console.log(res);
            })
    }
})