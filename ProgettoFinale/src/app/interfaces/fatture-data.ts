import { Fattur } from "../classes/fattur";

export interface FattureData {
    content: Array<Fattur>;
    pageable: Object;
    last: Boolean;
    totalPages: number;
    number: number;
    numberOfElement: number;
    size: number;
    sort: Object;
    first: Boolean;
    empty: Boolean;
}

