import {useState, useEffect} from "react";
import axios from "axios";
import {Service} from "./types";


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

export interface Species {
    results: Specie [];
    count: number;
}

const useGetSpecies = (page: number) => {

    const [result, setResult] = useState<Service<Species>>({status: "loading"});

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://swapi.co/api/species/?page=${page}`);
                setResult({data: response.data, status: "loaded"});
            } catch (error) {
                setResult({error, status: "error"});
                console.log(error);
            }
        })();
    }, [page]);

    return result;
};

export default useGetSpecies;

