import { Box, BoxProps } from "../../lib";
import { Navbar } from "../Navbar";

//Layout hame chizeb vasat sahafew naghe n]midare


type LayoutProps = {
   children?:BoxProps["children"];
}

export const Layout = (props:LayoutProps ) => {
  return Box({
    element: "div",
    children: [ 
      Navbar(),
       Box({
        element:"main",
        children: props.children,  
        attr:{
          className: " max-w-screen-md mx-auto  ",
        },
      }),
   ],
 
  });
};
//<div class="max-w-lg></div>".
//mx-auto yanie margin chapo raste yanie vasat bashe
//pt-5 mt-10