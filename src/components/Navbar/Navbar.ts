import { Box } from "../../lib";
import { routes } from "../../router/routes";

export const Navbar = () => {
 //   if(location.pathname === "/") return null;
  return Box({
        element:"nav",
        attr:{
          class:" flex justify-center py-1 h-10 pb-1 pt-1 item-center bg-blue-600 text-slate-100"
        },
        children:routes.map((route) => 
           route.isShow ?
         Box({
            element: "a",
            attr:{
                href:route.path,
                class:"text-slate-100 pl-10"
            },
           children:[
//           route.icon ?
//            Box({
//            element:"img",
//            attr:{
 //              class:"flex center",
//               src:route.icon,
//            },
//           })
//          : "",
           route.title,]
        }) : null
         ),
      });
    };
