import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import {Joke} from './interfaces/Jokes';
import Jokes from './components/Jokes';


const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;

export default function App() {
  const [data, setData] = useState<Joke[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      mode: 'no-cors'
      const rawData = await fetch("https://official-joke-api.appspot.com/jokes/random/9");
      const results: Joke[] = await rawData.json();
      setData(results);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was an error: " + e));
  }, []);

  function newJokes(){
    window.location.reload();
  }

  return (
    <ParentDiv>
      <button onClick={newJokes}>New Jokes</button>
        <Jokes data={data}/>
   </ParentDiv>
  )
}