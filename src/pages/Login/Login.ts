import { Button, TextField } from "../../components"
import { Box } from "../../lib"


export const Login = () => {
  const loginForm = {
    email: "",
    password: "",
 };    
  return    Box({
    element: "form",
   attr:{
      class: "px-4 rounded-md bg-slate-300 w-fit h-fit gap-20 mb-8 ml-40 ",
    },//<div class="grid grid-cols-2 gap-4 place-content-stretch h-48 ...">


      children:[
     Box({
      element:"img",
    attr:{
         src:"shop.image.3.jpg",
          class:" pt-2 flex ronded-md w-fit h-80 "
        }
     }),
      TextField({
        lable: "Enter your email:",
          placeholder: "email",
          onkeyup: (e) => {
            loginForm.email = e.target.value;
          },  
      }),
      TextField({
          lable: "Enter your password:",
          placeholder: "password",
          onkeyup: (e) => {
            loginForm.password = e.target.value;
          },   
      }), 
      TextField({
        icon:"bank.svg",
        lable: "Enter Bank card password:",
        placeholder: "---- , ---- , ---- , ----",
        onkeyup: (e) => {
          loginForm.password = e.target.value;
        },   
    }), 
      Button({
        children: "Log in",
          attr: {
            class:"mt-5 mb-8",
            onClick: (e) => {
              e.preventDefault();
              const existsUsers = localStorage.getItem("users");
              const parsedExistsUsers = existsUsers ? JSON.parse(existsUsers) : null;
              const existUser = parsedExistsUsers.find(
                (user: typeof loginForm) => (user.email === loginForm.email && user.password === loginForm.password)
              );
              if(existUser){
                localStorage.setItem("login","1");
              return   location.assign("/");
              }
              alert("welcome my site!")
              
         location.assign("/")
            },
          },
      }),
    ],
  });
  };
