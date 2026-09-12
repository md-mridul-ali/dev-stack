import { Suspense } from "react";
import "./App.css";
import AvailableStack from "./components/AvailableStack";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import type { IStack } from "./types/stackTypes";

//data fatching using asyn await arrow function
const stackFetch = async () : Promise<IStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const stackPromise = stackFetch()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailableStack stackPromise={stackPromise}></AvailableStack>
      </Suspense>
    </>
  );
}

export default App;
