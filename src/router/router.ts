
import { About } from "../pages/About";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Prouduct } from "../pages/Product";
import { Register } from "../pages/Register";

//function
//tabdil sting be adad parse
export function router (){
    const isLoggedIn = !!parseInt(localStorage.getItem("login") as string);
        switch (window.location.pathname) {
            case "/register":
              return !isLoggedIn &&  Register();
            case "/login":
                return !isLoggedIn && Login();
            case "/product":
                return !isLoggedIn && Prouduct();
            case "/about":
                    return !isLoggedIn && About();    
            default:
                return !isLoggedIn && Home();
        };
    };



