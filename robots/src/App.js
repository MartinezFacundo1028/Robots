import  {  useEffect, useState } from "react";
import Search from "./Components/Search/search";
import CardList from "./Components/CardList/cardList";
import Box from "./Components/Box/Box";
import "./App.css"

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=>setRobots(users))
  },[])


 const handleSearch = (event) => {
    setSearch(event.target.value);
 }

 const filterRobots = robots.filter(robot => {
  return robot.name.toLowerCase().includes(search.toLowerCase());
});
  
  
return (
    <div className="App">
      <h1 className="titulo">Robots</h1>
      <div>
        <Search search={handleSearch}/> 
      </div>
      <div>
        <Box>
          <CardList robots={filterRobots} />
        </Box>
      </div>
    </div>
  );
}

export default App;
