import {
    MenuModel
} from '../../models/menu'

const menuModel = new MenuModel()

Page({
    data: {
        menus: null,
        loadingCenter: true
    },

    onLoad: function (options) {
        menuModel.getMenus()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    menus: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        wx.navigateTo({
            url: `/pages/menu-detail/index?bid=${bid}`
        })
    },

    onShareAppMessage: function () {
    }
})