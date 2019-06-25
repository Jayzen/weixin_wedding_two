import {
    ContactModel
} from '../../models/contact'

const contactModel = new ContactModel()


Page({
    data: {
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        contactModel.getContacts()
            .then(res => {
                this.setData({
                    contacts: res
                })
                callback && callback();
            }).
            catch(res => {
                console.log(res);
            })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: event.currentTarget.dataset.telephone
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