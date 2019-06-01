import {
    HTTP
}
from '../utils/http'

class MenuModel extends HTTP {
    data = null
    getMenus() {
        return this.request({
            url: 'menus'
        })
    }
    getMenu(id) {
        return this.request({
            url: 'menus/' + id
        })
    }
}

export {
    MenuModel
}