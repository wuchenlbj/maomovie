export default{
    path:"/cinema",
    //路由懒加载
    component:()=>import("@/views/cinema"),
    name:"cinema"
}