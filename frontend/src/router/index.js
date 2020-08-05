import Vue from 'vue'
import Router from 'vue-router'
import MovieListPage from '@/components/MovieListPage'
import DetailMoviePage from '@/components/DetailMoviePage'
import UploadMoviePage from '@/components/UploadMoviePage'
import EditMoviePage from '@/components/EditMoviePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movielist',
      component: MovieListPage
    },
    {
      path: '/:id',
      name: 'detailmovie',
      component: DetailMoviePage
    },
    {
      path: '/upload',
      name: 'uploadmovie',
      component: UploadMoviePage
    },
    {
      path: '/edit',
      name: 'editmovie',
      component: EditMoviePage
    }
  ]
})
