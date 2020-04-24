import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventShow from '@/views/EventShow.vue'
import EventCreate from '@/views/EventCreate.vue'
import NProgress from 'nprogress'
import store from '@/store/index' // <--- Include our store
import NotFound from '@/components/NotFound.vue'
import NetworkIssue from '@/components/NetworkIssue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true
  },
  {
    // Notice this has to come before /event/:id
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event // <--- Set the event we retrieved
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({
              name: '404',
              params: { resource: 'event' }
            })
          } else {
            next({ name: 'network-issue' })
          }
        })
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    // Here's the new catch all route
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar.
  NProgress.start()
  next()
})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
