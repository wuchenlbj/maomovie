export default{
    path:"/mine",
    //路由懒加载
    component:()=>import("@/views/mine"),
    name:"mine"
}