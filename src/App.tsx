import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import {Joke} from './interfaces/Jokes';
import Jokes from './components/Jokes';


const ParentDiv=styled.div`
  width: 100%;
  margin: auto;
`;

export default function App() {
  /*
  function used to fetch data from the API and pass it on to child components for 
  rendering, includesa button to refresh the jokes shown on the page.
  */
  const [data, setData] = useState<Joke[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      mode: 'no-cors';
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

  const cta = <h3 style={{color: 'black'}}>Click on a joke to reveal the punch line!</h3>;

  return (
    <ParentDiv>
        <button onClick={newJokes}><h1>New Jokes</h1></button>
        {cta}
        <Jokes data={data}/>
   </ParentDiv>
  )
}