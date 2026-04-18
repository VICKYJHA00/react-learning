import react from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  return(
    <div className='flex flex-col bg-white h-screen w-full'>

     <Section1/>
     <Section2/>
    </div>
  )
}
export default App;