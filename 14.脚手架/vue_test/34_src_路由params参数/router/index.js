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
                                path: 'detail/:id/:title',
                                component: Detail
                            }
                        ]
                    },
                ]
            },
        ],
    })
