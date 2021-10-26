import { Actor } from "./Actor";

export interface Movie {
    id: string,
    title: string,
    plot: string,
    awards: string,
    actorList: Actor[]
    runtimeStr: string,
    fullTitle: string,
    image: string,
    year: number,
    contentRating: string,
    imDbRating: number
}