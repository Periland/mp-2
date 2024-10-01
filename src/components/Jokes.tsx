import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";
import SingleJoke from "./SingleJoke";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

export default function Jokes(props : {data:Joke[] } ){
    console.log("Jokes.tsx");
    console.log(props.data);
    return (
        <AllCharsDiv>
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
        </AllCharsDiv>
    );
}
