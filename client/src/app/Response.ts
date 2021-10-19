import { Movie } from "./movie";

export interface Response {
    errorMessage: string,
    items: Movie[],
}