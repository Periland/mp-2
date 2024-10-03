import styled from 'styled-components';
import { Joke } from '../interfaces/Jokes';
import { useState } from 'react';

const SingleJokeDiv=styled.div<{status: string, color: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "general" ? 'purple' : props.color)};
    color: white;
    border: 10px darkgoldenrod solid;
    font: small-caps bold calc(2px + 1vw) Roboto, sans-serif;
    text-align: center;
`;

const PunchDiv=styled.div<{reveal: boolean}>`
    display: ${(props) => (props.reveal ? 'block' : 'none')};
    `;

export default function SingleJoke({type, setup, punchline}: Joke){
    /*
    Component to set up the display styling of each joke fetched from the API, with data being passed down from the parent component.
    uses useState hook to toggle the display of the punchline when the joke is clicked, the background color of the joke is determined 
    by the type of joke.
    */
    const [show, setShow] = useState(false);

    function changeShow(){
        setShow(prevShow => !prevShow);
    }
    var color = "black";

    if (type === "general") {
        color = "purple";
    } else if (type === "programming") {
        color = "green";
    } else if (type === "knock-knock") {
        color = "blue";
    } else if (type === "dad") {
        color = "red";
    }

    return(
        <SingleJokeDiv status={type} color={color} onClick={changeShow}>
            <h2>{type}</h2>
            <h3>{setup}</h3>
            <PunchDiv reveal={show}>
                <h3><em>{punchline}</em></h3>
            </PunchDiv>
        </SingleJokeDiv>
    )
}