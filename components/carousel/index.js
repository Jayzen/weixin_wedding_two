Component({
    properties: {
        carousels: {
            type: Array
        }
    },

    data: {},

    methods: {
        onTap(event) {
            const bid = event.target.dataset.id
            wx.navigateTo({
                url: `/pages/tap-carousel/index?bid=${bid}`
            })
        }
    }
})