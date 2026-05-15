import React, { useEffect, useState } from "react";
import './CarFilter.css';

export default function CarFilter() {

    const [brandFilter, setBrandFilter] = useState(null)
    const [modelFilter, setModelFilter] = useState(null)
    const [typeFilter, setTypeFilter] = useState(null)
    const [allCars, setAllCars] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const [cars, setCars] = useState([])
    const [host, setHost] = useState('python')
    const LOCAL = host === 'python' ? "localhost:5000": "localhost:3001";
    useEffect(() => {
        const fetchFilteredCars = async () => {

            const params  =  new URLSearchParams();

            let url = `http://${LOCAL}/cars?`;

            if (brandFilter) {
                params.append("brand", brandFilter)
            }

            if (modelFilter) {
                params.append("model", modelFilter)
            }

            if (typeFilter) {
                params.append("type", typeFilter)
            }

            const response = await fetch(
                url +`${params.toString()}`
            );

            const data = await response.json();
            
            setCars(data);
        }

        fetchFilteredCars();
    },[brandFilter, modelFilter, typeFilter, LOCAL])

    useEffect(() => {
        const fetchAllCars = async ( ) => {
            let url = `http://${LOCAL}/cars`;

            const response = await fetch(url);

            const data = await response.json()

            setAllCars(data);
            setCars(data);
        }
        fetchAllCars();
    },[LOCAL])

    const brands = [...new Set(allCars.map((car) => car.brand))];

    const models = [...new Set(allCars.map((car) => car.model))];

    const types = [...new Set(allCars.map((car) => car.type))];

    useEffect(() => {
        console.log(types)
    },[models])

    useEffect(() => {
        console.log(brandFilter)
    },[brandFilter])

    const handleSort = (field) => {

        if (sortBy === field) {

            setSortOrder(sortOrder === "asc" ? "desc" : "asc");

        } else {

            setSortBy(field);
            setSortOrder("asc");
        }
    };

    const sortedCars = [...cars].sort((a, b) => {

        if (!sortBy) return 0;

        const valueA = a[sortBy].toLowerCase();
        const valueB = b[sortBy].toLowerCase();

        if (valueA < valueB) {
            return sortOrder === "asc" ? -1 : 1;
        }

        if (valueA > valueB) {
            return sortOrder === "asc" ? 1 : -1;
        }

        return 0;
    });

    return (
        <div className="root">

            <div className="setup">
                <div className="input">
                    <input type="radio" checked={host === 'python'} onChange={() => setHost(host === 'python' ? null : 'python')}/>
                    <label> backend Python</label>
                </div>
                <div className="input">
                    <input type="radio" checked={host === 'node'} onChange={() => setHost(host === 'node' ? null : 'node')}/>
                    <label> backend NodeJS</label>
                </div>
            </div>
            <div className="datas">
                <div className="filter">
                    <div className="brand">
                        <h3>--- Marque ---</h3>
                        {brands.length !== 0 && brands.map((brand, index) => (
                            <div className="input" key={brand}>
                                <input type="checkbox" checked={brandFilter === brand} onChange={() => setBrandFilter(brandFilter === brand ? null : brand)}/>
                                <label>{brand}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3>--- Modèle ---</h3>  
                        {models.length !== 0 && models.map((model, index) => (
                            <div className="input" key={model}>
                                <input type="checkbox" checked={modelFilter === model} onChange={() => setModelFilter(modelFilter === model ? null : model)}  />
                                <label>{model}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3>--- Type ---</h3>
                        {types.length !== 0 && types.map((type, index) => (
                            <div className="input" key={type}>
                                <input type="checkbox" checked={typeFilter === type} onChange={() => setTypeFilter(typeFilter === type ? null : type)}  />
                                <label>{type}</label>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="tab">
                    <div className="titles">
                        <div className="titleCol" onClick={() => handleSort("brand")}> marque </div>
                        <div className="titleCol" onClick={() => handleSort("model")}> modèle </div>
                        <div className="titleCol" onClick={() => handleSort("type")}> type</div>
                    </div>
                    <div className="car">
                        {sortedCars.length > 0 ? sortedCars.map((car, index) => (
                            <div key={car.id} className={`${"elements"} ${index % 2 === 0 ? "grayBackground" : ''}`} >
                                <div className="col">{car.brand}</div>
                                <div className="col">{car.model}</div>
                                <div className="col">{car.type} </div>
                            </div>
                        )) : 
                            <div className="notFound">
                                aucun véhicule ne correspond à votre recherche
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

