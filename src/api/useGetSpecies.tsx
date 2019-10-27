import {useState, useEffect} from "react";
import axios from "axios";
import {Service, Specie} from "./types";


export interface Species {
    results: Specie [];
    count: number;
}

// custom hook for fetching data from swap api
const useGetSpecies = (page: number) => {

    const [result, setResult] = useState<Service<Species>>({status: "loading"});

    useEffect(() => {
        (async (p: number) => {
            try {
                const response = await axios.get(`https://swapi.co/api/species/?page=${p}`);
                setResult({data: response.data, status: "loaded"});
            } catch (error) {
                setResult({error, status: "error"});
            }
        })(page);
    }, [page]);

    return result;
};

export default useGetSpecies;

