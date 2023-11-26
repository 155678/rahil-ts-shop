
const isLoggedIn = !!parseInt(localStorage.getItem("login") as string);
//object
export const routes = [
    {
        icon:"/home.svg",
        path:"/",
        title:"home Page",
        isShow: !isLoggedIn
        
    },
    {
        path:"/product",
        title: "product",
        isShow: !isLoggedIn
    },
    {
        path:"/about",
        title: "about",
        isShow: !isLoggedIn
    },
    {
        path:"/login",
        title:"login",
        isShow: !isLoggedIn   
    },
    {
        path:"/register",
        title:"register now!",
        isShow: !isLoggedIn        
    },
   
]