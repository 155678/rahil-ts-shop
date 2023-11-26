import { Box } from "../../lib";
import { ButtonProps } from "./types";



export const Button = (props : ButtonProps) => {
  return ( Box ({
    element: "button",
    children:props.children,
    attr : {
       ...props.attr,
        class: "text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    }
  }));
}
//mt-5