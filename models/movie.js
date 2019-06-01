import {
    HTTP
}
from '../utils/http'

class MovieModel extends HTTP {
    data = null
    getMovies() {
        return this.request({
            url: 'movies'
        })
    }
}

export {
    MovieModel
}