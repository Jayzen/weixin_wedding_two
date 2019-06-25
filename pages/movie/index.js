import {
    MovieModel
} from '../../models/movie'

const movieModel = new MovieModel()

Page({
    data: {
        movies: null,
        loadingCenter: true
    },

    onLoad: function() {
        this._loadData();
    },

    _loadData: function (callback) {
        movieModel.getMovies()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    movies: res
                })
                callback && callback();
            }).
        catch(res => {
            console.log(res);
        })
    },

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    },

    onShareAppMessage: function() {}
})