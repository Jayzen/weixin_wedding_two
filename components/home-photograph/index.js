Component({
    properties: {
        homePhotographs: {
            type: Array
        }
    },

    data: {},

    methods: {
        onTap(event) {
            const bid = event.target.dataset.id
            const type = event.target.dataset.type
            console.log(event.target.dataset)
            wx.navigateTo({
              url: `/pages/photograph-detail/index?bid=${bid}&type=${type}`
            })
        }
    }
})
