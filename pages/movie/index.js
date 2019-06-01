import {
    MovieModel
} from '../../models/movie'

const movieModel = new MovieModel()

Page({
    data: {
        movies: null
    },

    onLoad: function (options) {
        movieModel.getMovies()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    movies: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    onShareAppMessage: function () {
    }
})