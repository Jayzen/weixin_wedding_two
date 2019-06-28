Component({
    properties: {
        states: {
            type: Array
        }
    },

    data: {},

    methods: {
        onTap(event) {
            const bid = event.currentTarget.dataset.id
            const type = event.currentTarget.dataset.type
            console.log(event.currentTarget.dataset)
            wx.navigateTo({
              url: `/pages/photograph-detail/index?bid=${bid}&type=${type}`
            })
        }
    }
})