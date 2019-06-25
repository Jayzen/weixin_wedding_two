import {
    MenuModel
} from '../../models/menu'

const menuModel = new MenuModel()

Page({
    data: {
        menus: null,
        loadingCenter: true
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        menuModel.getMenus()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    menus: res
                })
                callback && callback();
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

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    },

    onShareAppMessage: function () {
    }
})