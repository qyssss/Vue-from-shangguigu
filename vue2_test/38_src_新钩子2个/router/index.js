// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'
import Detail from '@/pages/Detail'
// 创建并且导出一个路由器
export default
    new VueRouter({
        routes: [
            {
                name: 'about',
                path: '/about',
                component: About,
            },
            {
                path: '/home',
                component: Home,
                children: [
                    {   // 子路由 path 里面别加 /
                        path: 'news',
                        component: News
                    },
                    {
                        path: 'message',
                        component: Message,
                        children: [
                            {
                                // 使用 name在 router-link中把path直接写成name:'detail'
                                name: 'detail',
                                // 要用 params 参数要在path写占位
                                // path: 'detail/:id/:title',
                                path:'detail',
                                component: Detail,

                                // props 第一种写法(对象),该对象中所有key-value都以props形式传给Detail组件
                                // props: { a: 1, b: 'hello' }, 很少用

                                // props 第二种写法,值为布尔值,真则把路由组件所有params参数以props式传给Detail组件
                                // 可以省略掉Detail组件中的 $route.params,只能传 params
                                // props: true,

                                // props 第三种写法,值为函数,这个 query 也可以接收
                                props($route) {
                                    return {
                                        id: $route.query.id,
                                        title: $route.query.title
                                    }
                                }
                                // 解构赋值
                                /*  props({ query }) {
                                     return { id: query.id, title: query.title }
                                 } */

                            }
                        ]
                    },
                ]
            },
        ],
    })
