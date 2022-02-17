import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardGridItem = ({ item }) => {
    const { store, actions } = useContext(Context);
    const id = item.url.split("/")[5];


    return (
        <div className="card bg-transparent border-dark  " style={{ width: "18rem" }}>
            <img src="https://img.icons8.com/ios/50/000000/star-wars.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">Gender: {item.gender}</p>
                <p className="card-text">Hair Color: {item.hair_color}</p>
                <p className="card-text">Eye Color: {item.eye_color}</p>
                <>
                    <Link className="btn btn-outline-primary" to={`/single/${id}`}>Learn more</Link>
                    <button href="#" className="btn btn-outline-warning" onClick={() => { actions.guardaFavoritos(item.name, id) }}><i className="bi bi-heart"></i></button>
                </>

            </div>
        </div>
    );
};

CardGridItem.propTypes = {
    match: PropTypes.object
};
