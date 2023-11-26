
import {  Button, TextField } from "../../components";
import { ValidateEmail } from "../../helpers/validateEmail";
import { Box } from "../../lib"


export const Register = () => {

  const registorForm = {
     email: "",
     password: "",
     repeatPassword: "",
  } ;
  
  const handleRegisterUser = (e: Event) => {
     e.preventDefault();
     if(!registorForm.email || !ValidateEmail(registorForm.email)){
      return alert("email is invalid");
     }
     if(
      !registorForm.password ||
      !registorForm.repeatPassword ||
      registorForm.password !== registorForm.repeatPassword
     ) {
       return alert ("password and repeatPassworld is not equal!");
     }
     const existsUsers = localStorage.getItem("users");
     console.log(existsUsers)
     const parsedExistsUsers = existsUsers ? JSON.parse(existsUsers) : null;
     if(parsedExistsUsers){
      const existUser = parsedExistsUsers.find(
         (user: typeof registorForm) => user.email === registorForm.email
       );
       if(existUser) return alert("user Already Exists!")
      parsedExistsUsers.push(registorForm);
      const registorFormJson = JSON.stringify([registorForm]);
      localStorage.setItem("users" , registorFormJson);
     } else {
      const registorFormJson = JSON.stringify([registorForm]);
      localStorage.setItem("users" , registorFormJson)
     }
     console.log(existsUsers);
     console.log(parsedExistsUsers);
     const registorFormJson = JSON.stringify([registorForm]);
     localStorage.setItem( "users", registorFormJson);
  };

  return ( Box({
   element: "div",
  attr:{
     class:  " mt-16 px-4 rounded-md bg-slate-300 gap-10 w-80 h-80 gap-20 ml-44 pt-16",
   },
     children:[
    TextField({
      icon:"public/email-1-svgrepo-com.svg",
      lable: "Enter your email:",
        placeholder: "email",
        onkeyup:(e) => {
           registorForm.email = e.target.value;
        },      
    }),
    TextField({
      icon:"public/password-svgrepo-com (1).svg",
      lable: "Enter your password:",
        placeholder: "password",
        onkeyup:(e) => {
          registorForm.password = e.target.value;
       },   
    }),
    TextField({
      lable: "Enter your repeat passworld:",
      placeholder: "repeat password",
      onkeyup:(e) => {
        registorForm.repeatPassword = e.target.value;
     },   
  }),
  
   Button({
        attr: {
         onClick: handleRegisterUser,
       },
      children: "submit", 
   }), 
  ],
  }) );
};


