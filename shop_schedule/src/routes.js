import ShopsList from './ShopsList.vue'
import ShopDetails from './ShopDetails.vue'
import ShopCreate from './ShopCreate.vue'

export const routes = [
    {
        path: '/',
        component: ShopsList,
        name: 'home'
    },
    {
        path: '/',
        component: ShopsList,
        name: 'list'
    },
    {
        path: '/create',
        component: ShopCreate,
        name: 'create'
    },
    {
        path: '/details/:id',
        component: ShopDetails,
        name: 'details',
    },
    {
        path: '*',
        component: ShopsList
    }

]