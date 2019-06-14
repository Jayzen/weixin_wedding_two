Component({
    properties: {
        photographs: {
            type: Array
        }
    },

    data: {},

    methods: {
        onTap(event) {
            const bid = event.target.dataset.id
            wx.navigateTo({
                url: `/pages/tap-carousel-detail/index?bid=${bid}`
            })
        }
    }
})
