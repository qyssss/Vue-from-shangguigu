// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'
import Detail from '@/pages/Detail'

// 创建并且导出一个路由器
const router = new VueRouter({
    // 用 history 模式给后端之后一刷新页面就会消失
    // 但是 history 模式路径没有 # 好看, 通过后端解决问题
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {   // 子路由 path 里面别加 /
                    name: 'news',
                    path: 'news',
                    component: News,
                    // 自己定义的用meta配置项,这边表示需要权限校验
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫 只有前置没有后置   
                    /* beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) { // 判断是否需要权限
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            }
                            else {
                                alert('学校名错误')
                            }
                        }
                        else {
                            next()
                        }
                    } */
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            // 使用 name在 router-link中把path直接写成name:'detail'
                            name: 'detail',
                            // 要用 params 参数要在path写占位
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            meta: { title: '详情' },
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
// 全局前置路由守卫 beforeEach 每次路由切换之前 和 初始化的时候调用
/* router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    if (to.meta.isAuth) { // 判断是否需要权限
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        }
        else {
            alert('学校名错误')
        }
    }
    else {
        next()
    }
})
 */
// 全局后置路由守卫 beforeEach 每次路由切换之后 和 初始化的时候调用
// 里面没有 next 用的比较少,这边是切换完了之后再切换标题
router.afterEach((to, from) => {
    document.title = to.meta.title || '默认'
})
export default router