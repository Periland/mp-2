import styled from 'styled-components';
import { Joke } from '../interfaces/Jokes';

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function SingleJoke({type, setup, punchline}: Joke){
    return(
        <SingleCharDiv status={type}>
            <h1>Joke</h1>
            <h3>{type}</h3>
            <p>{setup}</p>
            <p>{punchline}</p>
        </SingleCharDiv>
    )
}