import {
    MenuModel
} from '../../models/menu'

const menuModel = new MenuModel()

Page({
    data: {
        menu_details: null,
        loadingCenter: true
    },

    onLoad: function (options) {
        const bid = options.bid
        menuModel.getMenu(bid)
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    menu_details: res            
                })
            })
            .catch(res => {
                console.log(res);
            })
    },

    onShareAppMessage: function () {
    }
})
