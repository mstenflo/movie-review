import { User } from "./User";

export interface Review {
    id: number,
    subject: string,
    body: string,
    reviewer: User,
    imdbid: string,
    createdAt: Date,
    updatedAt: Date
}