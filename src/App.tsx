import { Suspense, useState } from "react";
import "./App.css";
import AvailableStack from "./components/AvailableStack";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import type { IStack } from "./types/stackTypes";
import { ToastContainer, toast } from 'react-toastify';

//data fatching using asyn await arrow function
  const stackFetch = async () : Promise<IStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const stackPromise = stackFetch()
function App() {

  const [count, setCount] = useState(0); 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailableStack stackPromise={stackPromise}  count={count} setCount={setCount}></AvailableStack>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
