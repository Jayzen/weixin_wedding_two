import {
    ConsultModel
} from '../../models/consult'

const consultModel = new ConsultModel()

Component({
    properties: {},

    data: {
        name: '',
        contact: ''
    },

    methods: {
        formSubmit: function(e) {
            consultModel.createConsult(e.detail.value.name, e.detail.value.contact)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                    this.setData({
                        name: '',
                        contact: ''
                    })
                }).
            catch(res => {
                console.log(res);
            })
        },
    }
})

