export interface Specie {
    url: string;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    language: string;
}

interface ServiceInit {
    status: "init";
}

interface ServiceLoading {
    status: "loading";
}

interface ServiceLoaded<T> {
    status: "loaded";
    data: T;
}

interface ServiceError {
    status: "error";
    error: Error;
}

export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

