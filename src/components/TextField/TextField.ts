
import { Box } from "../../lib/Box/Box"
import { TextFieldProps } from "./types";

export const TextField = ( props: TextFieldProps = {
   helperText: "",
   lable: "",
}) => {
    const { helperText , lable , icon , ...restProps } = props;
    const id = crypto.randomUUID()
  return Box({
   element: "div",
   children: [ 
    lable &&
    Box ({
      element: "lable",
      children: lable,
      attr:{
        for: id,
      }
    }),
    Box ( {
    element: "div",
    attr: {
      className: "bg-gray-50 peer  flex items-center h-10 w-full focus-within:ring-1 pr-2 overflow-hidden border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    children: [
      Box({
        element: "input",
        attr: {
          id,
          className: "w-full p-2.5 bg-transparent outline-none h-full",
          ...restProps,
        },
      }),
    icon && Box({
        element: "img",
        attr: {
          className: "w-6 h-6",
          src:icon
        }
      }) 
    ],
    }),
   ],
  });
};