import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";
import SingleJoke from "./SingleJoke";

const AllJokesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #FFFDD0;
`;

export default function Jokes(props : {data:Joke[] } ){
    /*
    Component to set up the display styling of all jokes fetched from the API 
    and pass down the joke data to the child component for rendering
    */
    console.log("Jokes.tsx");
    console.log(props.data);
    return (
        <AllJokesDiv>
            {
                props.data.map((j: Joke) => 
                    <SingleJoke
                        key={j.id}
                        id={j.id}
                        type={j.type}
                        setup={j.setup}
                        punchline={j.punchline}
                    />
                )
            }
        </AllJokesDiv>
    );
}
