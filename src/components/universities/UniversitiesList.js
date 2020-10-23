import React from 'react'
import UniverListItem from './UniverListItem';

const UniversitiesList = () => {
    const universityNames = [
        { univerName: "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI", acronym: "tatu" },
        { univerName: "TOSHKENT DAVLAT YURIDIK UNIVERSITETI", acronym: "tdyu" },
        { univerName: "TOSHKENT DAVLAT IQTISODIYOT UNIVERSITETI", acronym: "tdiu" },
        { univerName: "TOSHKENT DAVLAT PEDAGOGIKA UNIVERSITETI", acronym: "tdpu" },
        { univerName: "TOSHKENT DAVLAT AGRAR UNIVERSITETI", acronym: "tdau" },
        { univerName: "TOSHKENT DAVLAT TEXNIKA UNIVERSITETI", acronym: "tdtu" }
    ]
    return (

        <div className="container">
            <div className="universities-list">
                {universityNames.map(univer => {
                    return (
                        <UniverListItem key={univer.acronym} univerName={univer.univerName} acronym={univer.acronym} />

                    )
                })}
            </div>

        </div>

    )
}

export default UniversitiesList
