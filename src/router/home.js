export default{
    name:"home",
    path:'/home',
    component:()=>import("@/views/Home"),
    children:[
        {path:'actor',component:()=>import("@/views/Home/Actor"),name:"actor"}
    ]
}