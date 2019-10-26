import React, {useState} from "react";
import useGetSpecies, {Species} from "../api/useGetSpecies";
import _ from "lodash";
import Spinner from "./Spinner";

const handleClick = (side: string, setPage: any, currentPage: number, totalPages: number) => {
    if (side === "right") {
        (currentPage < totalPages) ? setPage(currentPage + 1) : setPage(currentPage);
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
                    {specie.language}
                </td>
            </tr>);
    });
};


const Table = ({status = ""}) => {
    const [currentPage, setPage] = useState(1);
    const service = useGetSpecies(currentPage);

    if (service.status === "loading" || status === "loading") {
        return <Spinner/>;
    }

    if (service.status === "error") {
        return <Spinner message={service.error.message || status}/>;
    }


    const species = (service.status === "loaded") && createTable(service.data);
    const count = (service.status === "loaded") && service.data.count || 0;


    const pageTotal = Math.ceil(count / 10);
    const pages = _.range(1, pageTotal + 1).map((page) => {
        return (<div key={page} id={page.toString()} className={`link item ${(currentPage === page) && "active"}`}
                     onClick={() => setPage(page)}>{page}</div>);
    });

    return (
        <table className="ui fixed padded large table selectable striped blue">
            <thead className={"full-width"}>
            <tr>
                <th>Name</th>
                <th>Classification</th>
                <th>Designation</th>
                <th>Skin Colors</th>
                <th>Hair Colors</th>
                <th>Eye Colors</th>
                <th>Average Lifespan</th>
                <th>Language</th>
            </tr>
            </thead>
            <tbody>
            {species}
            </tbody>
            <tfoot>
            <tr>
                <th colSpan={8}>
                    <div className="ui right floated pagination menu">
                        <div onClick={() => handleClick("left", setPage, currentPage, pageTotal)}
                             className="link icon item">
                            <i className="left chevron icon"/>
                        </div>
                        {pages}
                        <div onClick={() => handleClick("right", setPage, currentPage, pageTotal)}
                             className="link icon item">
                            <i className="right chevron icon"/>
                        </div>
                    </div>
                </th>
            </tr>
            </tfoot>
        </table>
    );
};

export default Table;
