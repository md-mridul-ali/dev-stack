import { Suspense, useState } from "react";
import "./App.css";
import AvailableStack from "./components/AvailableStack";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import type { IStack } from "./types/stackTypes";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";


  const stackFetch = async () : Promise<IStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const stackPromise = stackFetch()
function App() {

  const [count, setCount] = useState(0); 

  //test
  const [selectedStack, setSelectedStack] = useState<IStack[]>([]);

  const removeStack = (s:IStack) =>{
  const filteredData = selectedStack.filter(ply => ply.id !== s.id)
  console.log(filteredData);
  setSelectedStack(filteredData);
}


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailableStack
         stackPromise={stackPromise}  count={count} setCount={setCount} selectedStack={selectedStack} setSelectedStack={setSelectedStack} removeStack={removeStack}
        >
        </AvailableStack>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
