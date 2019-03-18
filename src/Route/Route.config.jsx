import App from '../components/App'
import Home from "../components/Home"
import Login from "../components/Login"

export default [
    {path:'/',name:'App',component:App,auth:true},
    {path:'/login',name:'Login',component:Login,auth:false},
    {path:'/home',name:'Home',component:Home,auth:true}
]