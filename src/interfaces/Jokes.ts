/*
Data structure for each Joke fetched from the Jokes API
*/

export interface Joke {
    id: number
    type: string
    setup: string
    punchline: string
}
