import React, {useState} from "react";
import useGetSpecies, {Species} from "../api/useGetSpecies";
import _ from "lodash";
import Spinner from "./Spinner";

const handleClick = (side: string, setPage: any, currentPage: number, totalPages: number) => {
    if (side === "right") {
        (currentPage + 1 < totalPages + 1) ? setPage(currentPage + 1) : setPage(currentPage);
    }
    if (side === "left") {
        (currentPage - 1 > 0) ? setPage(currentPage - 1) : setPage(currentPage);
    }
};

const createTable = (species: Species) => {
    return species.results.map((specie) => {
        return (
            <tr key={specie.url}>
                <td className="single line">
                    {specie.name}
                </td>
                <td className="single line">
                    {specie.classification}
                </td>
                <td className="single line">
                    {specie.designation}
                </td>
                <td className="single line">
                    {specie.skin_colors}
                </td>
                <td className="single line">
                    {specie.hair_colors}
                </td>
                <td className="single line">
                    {specie.eye_colors}
                </td>
                <td className="single line">
                    {specie.average_lifespan}
                </td>
                <td className="single line">
                    {specie.homeworld}
                </td>
                <td className="single line">
                    {specie.language}
                </td>
            </tr>);
    });
};


const Table = () => {
    const [currentPage, setPage] = useState(1);
    const service = useGetSpecies(currentPage);

    if (service.status === "loading") {
        return <Spinner/>;
    }

    let species: {} | null | undefined = [];
    let pages: {} | null | undefined;
    let count = 1;

    if (service.status === "loaded") {
        species = createTable(service.data);
        count = service.data.count;
    }

    const pageTotal = Math.ceil(count / 10);
    pages = _.range(1, pageTotal + 1).map((page) => {
        return (<div key={page} id={page.toString()} className={`link item ${(currentPage === page) ? "active" : ""}`}
                     onClick={() => setPage(page)}>{page}</div>);
    });

    return (
        <table className="ui fixed single line celled table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Classification</th>
                <th>Designation</th>
                <th>Skin Colors</th>
                <th>Hair Colors</th>
                <th>Eye Colors</th>
                <th>Average Lifespan</th>
                <th>Home World</th>
                <th>Language</th>
            </tr>
            </thead>
            <tbody>
            {species}
            </tbody>
            <tfoot>
            <tr>
                <th colSpan={9}>
                    <div className="ui right floated pagination menu">
                        <a onClick={() => handleClick("left", setPage, currentPage, pageTotal)} className="icon item">
                            <i className="left chevron icon"/>
                        </a>
                        {pages}
                        <a onClick={() => handleClick("right", setPage, currentPage, pageTotal)} className="icon item">
                            <i className="right chevron icon"/>
                        </a>
                    </div>
                </th>
            </tr>
            </tfoot>
        </table>
    );
};

export default Table;
