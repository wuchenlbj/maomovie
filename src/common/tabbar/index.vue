<template>
    <div id = "footer">
        <ul>
            <router-link 
            tag="li"
            v-for="(item,index) in tabBar"
            :to="item.path"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"tabBar",
    data(){
        return{
            tabBar:[
                {
                  title:"电影",
                  path:"/movie",
                  icon:"&#xe717;"
                },
                {
                    title:"影院",
                    path:"/cinema",
                    icon:"&#xe61d;"
                },
                {
                    title:"我的",
                    path:"/mine",
                    icon:"&#xe605;"
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss" >
$color:#e54;
#footer{
    width:100%;
    height:1rem;
    position:fixed;
    background:#fff;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        li{
            width:100%;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color:#333;
            font-size:.3rem;
        }
    }
}
#footer>ul>.router-link-active{
    color:$color;
}
#footer>ul>li>span{
    display:block;
    text-align:center;
    padding-top:.06rem;
}
#footer>ul>li>i{
    font-size:.4rem;
    text-align:center;
}


</style>
