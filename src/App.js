import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ContainerCharacter from "./components/ContainerCharacter";
import Pagination from "./components/Pagination";

function App() {
  const [character, setCharacter] = useState([]);
  const [pagination, setPagination] = useState({});
  const fetchCharacter = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacter(data.results);
    setPagination(data.info);
  };
  useEffect(() => {
    fetchCharacter("https://rickandmortyapi.com/api/character");
  }, []);
  const Onnext = () => {
    fetchCharacter(pagination.next);
  };
  const Onprevious = () => {
    fetchCharacter(pagination.prev);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Pagination Onnext={Onnext} Onprevious={Onprevious} pagination={pagination}/>
        <ContainerCharacter character={character} />
        <Pagination Onnext={Onnext} Onprevious={Onprevious} pagination={pagination} />
      </div>
    </>
  );
}

export default App;
