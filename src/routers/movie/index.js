export default{
    path:"/movie",
    //路由懒加载
    component:()=>import("@/views/movie"),
    name:"movie"
}