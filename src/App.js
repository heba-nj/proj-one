// import { useState } from "react";
// import Comp from "./Comp";
import Hero from "./sections/Hero";
import Customer from "./sections/Customer";
import Footer from "./sections/Footer";
import Popular from "./sections/Popular";
import Services from "./sections/Services";
import Special from "./sections/Special";
import Subscribe from "./sections/Subscribe";
import Super from "./sections/Super";
import Nav from "./components/Nav";

function App() {
  // const [name,setName] = useState("heba")
  // const [isToggle,setIsToggle] = useState(false)
  // const handleToggle = () => {
  //   setIsToggle(!isToggle)
  // }
  // return <div className="text-center">
  // <button className="mt-5 bg-red-600 text-white border-r-4 border-red-900 p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300" onClick={()=> setName("yara")}>Please click here!</button>
  // <p className="font-bold mt-3">{name}</p>
  // <p className="font-bold mt-3">{isToggle? "Qamar":"Rama"}</p>
  // <button className="mt-5 bg-pink-600 text-white border-r-4 border-red-900 p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300" onClick={handleToggle}>Please click here!</button>
  // <Comp title={"ALNAJJAR"} age={15}/>
  // </div>;
  return (
    <main className="relative">
      <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <Popular/>
    </section>
    <section className="padding">
      <Super/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <Special/>
    </section>
    <section className="padding bg-pale-blue">
      <Customer/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
    </main>
  )
}

export default App;
