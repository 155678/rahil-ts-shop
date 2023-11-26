import { Box } from "../../lib/Box";


export const About = () => {
  return Box({
  element:"h1",
  children:"about us",
  attr:{
    class:"text-center text-xl font-bold text-blue-600 py-3"
  }
 }),
Box({
element:"div",
attr:{
  class: "flex center bg-slate-300  w-full  h-full bg-slate-300 mt-20   px-2  rounded overflow-hidden shadow-lg"
},
children:[
    
        Box({
           element: "img",
           attr:{
            src:"pants.jpg",
            class:"w-80 px-3 pt-3 pb-3 rounded-md"
           }
        }),
        Box({
          element:"span",
          children:"Trousers (British English), slacks, or pants (American English) are an item of clothing worn from the waist to anywhere between the knees and the ankles, covering both legs separately (rather than with cloth extending across both legs as in robes, skirts, dresses and kilts). In the United Kingdom, the word pants generally means underwear and not trousers.[1] Shorts are similar to trousers, but with legs that come down only to around the area of the knee, higher or lower depending on the style of the garment. To distinguish them from shorts, trousers may be called long trousers in certain contexts such as school uniform, where tailored shorts may be called shortThe oldest known trousers, dating to the period between the thirteenth and the tenth centuries BC, were found at the Yanghai cemetery in Turpan, Xinjiang (Tocharia), in present-day western China.[2][3] Made of wool, the trousers had trousers in the UK.",
          attr:{
            class:"w-full h-full px-2"
          }
        })
      ]
  })
}
