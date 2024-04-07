import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Courses from "./components/Courses";
import {filterData,apiUrl} from "./data";
import { useState } from "react";

const App = () => {

  const [category,setCategory] = useState(filterData[0].title);
  
  return (

    <div className="flex flex-col min-h-screen bg-bgDark2">

      <NavBar/>
      
      <Filter data={filterData} setCategoryValue={setCategory} categoryValue={category}/>
      
      <Courses courseUrl={apiUrl} categoryValue={category}/>

    </div>

  );
};

export default App;
