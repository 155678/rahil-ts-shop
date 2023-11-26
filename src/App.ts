import { Layout } from "./components";
import { router } from "./router";
// /regix/.test("mdfgsa")


export const App = () => {
    
     return  Layout ({
        children:[router()],
    });
 };


 
