import "./App.css";
import { useState } from "react";
import JsonData from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {JsonData.filter((data) => {
        if (search == "") return data;
        if (data.first_name.toLowerCase().includes(search.toLowerCase()))
          return data;
      }).map((data) => {
        return <div>{data.first_name}</div>;
      })}
    </div>
  );
}

export default App;
