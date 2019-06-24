import {
    HTTP
}
    from '../utils/http'

class OfficialAccountModel extends HTTP {
    data = null
    getOfficialAccounts() {
        return this.request({
            url: 'official_accounts'
        })
    }
}

export {
    OfficialAccountModel
}