import {
    ContactModel
} from '../../models/contact'
import {
    TemplatetModel
} from '../../models/template'

const templateModel = new TemplatetModel()
const contactModel = new ContactModel()

Component({
    properties: {},

    data: {
        name: '',
        telephone: ''
    },

    methods: {
        formSubmit: function(e) {
            console.log("hello world")
            console.log(e.detail.formId)
            contactModel.createContact(e.detail.value.name, e.detail.value.telephone)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                    templateModel.createContactTemplate(e.detail.formId, e.detail.value.name, e.detail.value.telephone)
                    this.setData({
                        name: '',
                        telephone: ''
                    })
                }).
            catch(res => {
                console.log(res);
            })
        },
    }
})

