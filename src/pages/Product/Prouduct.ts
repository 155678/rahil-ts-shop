import { Button } from "../../components/Button";
import { Box } from "../../lib"

export const Prouduct = () => {
  return   Box({
    element: "div",
    attr:{
      class:"px-2"
    },
    children:[  Box({
      element:"h3",
      children: "Prouducts",
      attr:{
        class:"text-center text-2xl font-bold text-blue-600 py-3 "
      }
    }),
    Box({
       element: "h5",
       children: "Choose the dress",
       attr:{
         class: "  text-xl text-slate-400 pt-3 px-5 pr-4"
       }
    }),
    Box({
      element: "div",
     attr:{
        class: "flex  w-full h-full gap-20 ps-7 px-2 mt-7",
      },
        children:[ 
        Box({
        element: "div",
        attr:{
          class: "w-fit h-fit bg-slate-300 gap-20  px-2 max-w-sm rounded overflow-hidden shadow-lg"
        },
        children:[
          Box({
            element:"img",
            attr:{
              src:"image.2.png",   
            class: "rounded-md curse-pointer w-fit h-fit mt-2 "
           }
          }),        
          Box({
              element: "p",
              children: "Shoes prefect",
              attr: {
                class: "max-w-sm font-medium text-slate-700 py-2 px-2 "
              }
          }),
          Box({
             element: "p",
             children: "25$",
             attr:{
                class:"max-w-sm font-bold text-blue-500 px-2 py-2"
             }
          }),
          Button({
            children: "buy",
            attr: {
              onclick:(e:Event) => {
                e.preventDefault();
                location.assign("/login")
                },
                class:"w-fit h-fit"
              },
            },
         ),
        ],    
        }),
        Box({
          element: "div",
          attr:{
            class: "w-fit h-fit bg-slate-300 gap-20  px-2  max-w-sm rounded overflow-hidden shadow-lg"
          },
          children:[
            Box({
              element:"img",
              attr:{
                src:"hat.cap2.jpg",   
              class: "rounded-md curse-pointer w-fit h-fit mt-2"
             }
            }),
            
            Box({
                element: "p",
                children: "hat-cap",
                attr: {
                  class: "max-w-sm font-medium text-slate-700 py-2 px-2 "
                }
            }),
            Box({
               element: "p",
               children: "15$",
               attr:{
                  class:"max-w-sm font-bold text-blue-500 px-2 py-2"
               }
            }),
            Button({
              children: "buy",
              attr: {
                onclick:(e:Event) => {
                  e.preventDefault();
                  location.assign("/login")
                  },
                  class:"w-fit h-fit"
                },
              },
           ),
          ],    
          }),
        ],
       }),
       Box({
        element: "div",
       attr:{
          class: "flex  w-full h-full gap-20 ps-7 px-2 mt-7	 ",
        },
          children:[ 
          Box({
          element: "div",
          attr:{
            class: "w-72 h-fit bg-slate-300 gap-20  px-2 max-w-sm rounded overflow-hidden shadow-lg"
          },
          children:[
            Box({
              element:"img",
              attr:{
                src:"glasses.jpg",   
              class: "rounded-md curse-pointer w-fit h-48 mt-2 ml-3"
             }
            }),        
            Box({
                element: "p",
                children: "glasses sun",
                attr: {
                  class: "max-w-sm font-medium text-slate-700 py-2 px-2 "
                }
            }),
            Box({
               element: "p",
               children: "12$",
               attr:{
                  class:"max-w-sm font-bold text-blue-500 px-2 py-2"
               }
            }),
            Button({
              children: "buy",
              attr: {
                onclick:(e:Event) => {
                  e.preventDefault();
                  location.assign("/login")
                  },
                  class:" w-fit h-fit "
                },
              },
           ),
          ],    
          }),
          Box({
            element: "div",
            attr:{
              class: "w-72 h-fit  bg-slate-300 gap-20  px-2  max-w-sm rounded overflow-hidden shadow-lg"
            },
            children:[
              Box({
                element:"img",
                attr:{
                  src:"T-shirt.jpg",   
                class: "rounded-md curse-pointer w-fit h-48  mt-2 ml-6 "
               }
              }),
              
              Box({
                  element: "p",
                  children: "T-Shirts",
                  attr: {
                    class: "max-w-sm font-medium text-slate-700 py-2 px-2 "
                  }
              }),
              Box({
                 element: "p",
                 children: "18$",
                 attr:{
                    class:"max-w-sm font-bold text-blue-500 px-2 py-2"
                 }
              }),
              Button({
                children: "buy",
                attr: {
                  onclick:(e:Event) => {
                    e.preventDefault();
                    location.assign("/login")
                    },
                    class:"w-fit h-fit"
                  },
                },
             ),
            ],    
            }),
          ],
         }),
         Box({
          element: "div",
         attr:{
            class: "flex  w-full h-full gap-20 ps-7 px-2 mt-7",
          },
            children:[ 
            Box({
            element: "div",
            attr:{
              class: "w-72 h-80 bg-slate-300 gap-20  px-2 max-w-sm rounded overflow-hidden shadow-lg"
            },
            children:[
              Box({
                element:"img",
                attr:{
                  src:"bag3.jpg",   
                class: "rounded-md curse-pointer w-80 h-44 mt-2 "
               }
              }),        
              Box({
                  element: "p",
                  children: "bags-briefcase",
                  attr: {
                    class: "max-w-sm font-medium text-slate-700 py-2 px-2 "
                  }
              }),
              Box({
                 element: "p",
                 children: "35$",
                 attr:{
                    class:"max-w-sm font-bold text-blue-500 px-2 py-2 mb-2"
                 }
              }),
              Button({
                children: "buy",
                attr: {
                  onclick:(e:Event) => {
                    e.preventDefault();
                    location.assign("/login")
                    },
                    class:"w-fit h-fit"
                  },
                },
             ),
            ],    
            }),
            Box({
              element: "div",
              attr:{
                class: "w-72 h-80 bg-slate-300 gap-20  px-2 max-w-sm rounded overflow-hidden shadow-lg"
              },
              children:[
                Box({
                  element:"img",
                  attr:{
                    src:"dress.iamge.jpg",   
                  class: "rounded-md curse-pointer w-80 h-44 mt-2 "
                 }
                }),     
                Box({
                    element: "p",
                    children: "dress",
                    attr: {
                      class:"max-w-sm font-bold text-blue-500 px-2 py-2 "
                    }
                }),
                Box({
                   element: "p",
                   children: "45$",
                   attr:{
                    class:"max-w-sm font-bold text-blue-500 px-2 py-2 mb-2"
                   }
                }),
                Button({
                  children: "buy",
                  attr: {
                    onclick:(e:Event) => {
                      e.preventDefault();
                      location.assign("/login")
                      },
                      class:"w-fit h-fit "
                    },
                  },
               ),
              ],    
              }),
            ],
           }),         
    ], 
    })
};

   