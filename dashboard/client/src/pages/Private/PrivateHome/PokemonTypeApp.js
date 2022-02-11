import React, { useState } from "react";
import Axios from "axios";

function PokemonTypeApp() {

    const [typeName, setTypeName] = useState("");

    const [typeChosen, setTypeChosen] = useState(false);

    const [type, setType] = useState({
        typename: "",
        first_double_damage_from: "",
        second_double_damage_from: "",
        third_double_damage_from: "",
        four_double_damage_from: "",
        five_double_damage_from: "",
        six_double_damage_from: "",
        seven_double_damage_from: "",
        height_double_damage_from: "",
        nine_double_damage_from: "",
        ten_double_damage_from: "",
        eleven_double_damage_from: "",
        twelve_double_damage_from: "",
        first_double_damage_to: "",
        second_double_damage_to: "",
        third_double_damage_to: "",
        four_double_damage_to: "",
        five_double_damage_to: "",
        six_double_damage_to: "",
        seven_double_damage_to: "",
        height_double_damage_to: "",
        nine_double_damage_to: "",
        ten_double_damage_to: "",
        eleven_double_damage_to: "",
        twelve_double_damage_to: "",
        first_half_damage_from: "",
        second_half_damage_from: "",
        third_half_damage_from: "",
        four_half_damage_from: "",
        five_half_damage_from: "",
        six_half_damage_from: "",
        seven_half_damage_from: "",
        height_half_damage_from: "",
        nine_half_damage_from: "",
        ten_half_damage_from: "",
        eleven_half_damage_from: "",
        twelve_half_damage_from: "",
        first_half_damage_to: "",
        second_half_damage_to: "",
        third_half_damage_to: "",
        four_half_damage_to: "",
        five_half_damage_to: "",
        six_half_damage_to: "",
        seven_half_damage_to: "",
        height_half_damage_to: "",
        nine_half_damage_to: "",
        ten_half_damage_to: "",
        eleven_half_damage_to: "",
        twelve_half_damage_to: "",
        first_no_damage_from: "",
        second_no_damage_from: "",
        third_no_damage_from: "",
        four_no_damage_from: "",
        five_no_damage_from: "",
        six_no_damage_from: "",
        seven_no_damage_from: "",
        height_no_damage_from: "",
        nine_no_damage_from: "",
        ten_no_damage_from: "",
        eleven_no_damage_from: "",
        twelve_no_damage_from: "",
        first_immune_to: "",
        second_immune_to: "",
        third_immune_to: "",
        four_immune_to: "",
        five_immune_to: "",
        six_immune_to: "",
        seven_immune_to: "",
        height_immune_to: "",
        nine_immune_to: "",
        ten_immune_to: "",
        eleven_immune_to: "",
        twelve_immune_to: "",
    });

    const searchType = (e) => {

        e.preventDefault();

        Axios.get(`https://pokeapi.co/api/v2/type/${typeName.toLowerCase()}`).then(
            (response) => {
                console.log(response);
                setType({
                    name: typeName,
                    first_double_damage_from: !response.data.damage_relations.double_damage_from[0] ? "" : response.data.damage_relations.double_damage_from[0].name,
                    second_double_damage_from: !response.data.damage_relations.double_damage_from[1] ? "" : response.data.damage_relations.double_damage_from[1].name,
                    third_double_damage_from: !response.data.damage_relations.double_damage_from[2] ? "" : response.data.damage_relations.double_damage_from[2].name,
                    four_double_damage_from: !response.data.damage_relations.double_damage_from[3] ? "" : response.data.damage_relations.double_damage_from[3].name,
                    five_double_damage_from: !response.data.damage_relations.double_damage_from[4] ? "" : response.data.damage_relations.double_damage_from[4].name,
                    six_double_damage_from: !response.data.damage_relations.double_damage_from[5] ? "" : response.data.damage_relations.double_damage_from[5].name,
                    seven_double_damage_from: !response.data.damage_relations.double_damage_from[6] ? "" : response.data.damage_relations.double_damage_from[6].name,
                    height_double_damage_from: !response.data.damage_relations.double_damage_from[7] ? "" : response.data.damage_relations.double_damage_from[7].name,
                    nine_double_damage_from: !response.data.damage_relations.double_damage_from[8] ? "" : response.data.damage_relations.double_damage_from[8].name,
                    ten_double_damage_from: !response.data.damage_relations.double_damage_from[9] ? "" : response.data.damage_relations.double_damage_from[9].name,
                    eleven_double_damage_from: !response.data.damage_relations.double_damage_from[10] ? "" : response.data.damage_relations.double_damage_from[10].name,
                    twelve_double_damage_from: !response.data.damage_relations.double_damage_from[11] ? "" : response.data.damage_relations.double_damage_from[11].name,
                    first_double_damage_to: !response.data.damage_relations.double_damage_to[0] ? "" : response.data.damage_relations.double_damage_to[0].name,
                    second_double_damage_to: !response.data.damage_relations.double_damage_to[1] ? "" : response.data.damage_relations.double_damage_to[1].name,
                    third_double_damage_to: !response.data.damage_relations.double_damage_to[2] ? "" : response.data.damage_relations.double_damage_to[2].name,
                    four_double_damage_to: !response.data.damage_relations.double_damage_to[3] ? "" : response.data.damage_relations.double_damage_to[3].name,
                    five_double_damage_to: !response.data.damage_relations.double_damage_to[4] ? "" : response.data.damage_relations.double_damage_to[4].name,
                    six_double_damage_to: !response.data.damage_relations.double_damage_to[5] ? "" : response.data.damage_relations.double_damage_to[5].name,
                    seven_double_damage_to: !response.data.damage_relations.double_damage_to[6] ? "" : response.data.damage_relations.double_damage_to[6].name,
                    height_double_damage_to: !response.data.damage_relations.double_damage_to[7] ? "" : response.data.damage_relations.double_damage_to[7].name,
                    nine_double_damage_to: !response.data.damage_relations.double_damage_to[8] ? "" : response.data.damage_relations.double_damage_to[8].name,
                    ten_double_damage_to: !response.data.damage_relations.double_damage_to[9] ? "" : response.data.damage_relations.double_damage_to[9].name,
                    eleven_double_damage_to: !response.data.damage_relations.double_damage_to[10] ? "" : response.data.damage_relations.double_damage_to[10].name,
                    twelve_double_damage_to: !response.data.damage_relations.double_damage_to[11] ? "" : response.data.damage_relations.double_damage_to[11].name,
                    first_half_damage_from: !response.data.damage_relations.half_damage_from[0] ? "" : response.data.damage_relations.half_damage_from[0].name,
                    second_half_damage_from: !response.data.damage_relations.half_damage_from[1] ? "" : response.data.damage_relations.half_damage_from[1].name,
                    third_half_damage_from: !response.data.damage_relations.half_damage_from[2] ? "" : response.data.damage_relations.half_damage_from[2].name,
                    four_half_damage_from: !response.data.damage_relations.half_damage_from[3] ? "" : response.data.damage_relations.half_damage_from[3].name,
                    five_half_damage_from: !response.data.damage_relations.half_damage_from[4] ? "" : response.data.damage_relations.half_damage_from[4].name,
                    six_half_damage_from: !response.data.damage_relations.half_damage_from[5] ? "" : response.data.damage_relations.half_damage_from[5].name,
                    seven_half_damage_from: !response.data.damage_relations.half_damage_from[6] ? "" : response.data.damage_relations.half_damage_from[6].name,
                    height_half_damage_from: !response.data.damage_relations.half_damage_from[7] ? "" : response.data.damage_relations.half_damage_from[7].name,
                    nine_half_damage_from: !response.data.damage_relations.half_damage_from[8] ? "" : response.data.damage_relations.half_damage_from[8].name,
                    ten_half_damage_from: !response.data.damage_relations.half_damage_from[9] ? "" : response.data.damage_relations.half_damage_from[9].name,
                    eleven_half_damage_from: !response.data.damage_relations.half_damage_from[10] ? "" : response.data.damage_relations.half_damage_from[10].name,
                    twelve_half_damage_from: !response.data.damage_relations.half_damage_from[11] ? "" : response.data.damage_relations.half_damage_from[11].name,
                    first_half_damage_to: !response.data.damage_relations.half_damage_to[0] ? "" : response.data.damage_relations.half_damage_to[0].name,
                    second_half_damage_to: !response.data.damage_relations.half_damage_to[1] ? "" : response.data.damage_relations.half_damage_to[1].name,
                    third_half_damage_to: !response.data.damage_relations.half_damage_to[2] ? "" : response.data.damage_relations.half_damage_to[2].name,
                    four_half_damage_to: !response.data.damage_relations.half_damage_to[3] ? "" : response.data.damage_relations.half_damage_to[3].name,
                    five_half_damage_to: !response.data.damage_relations.half_damage_to[4] ? "" : response.data.damage_relations.half_damage_to[4].name,
                    six_half_damage_to: !response.data.damage_relations.half_damage_to[5] ? "" : response.data.damage_relations.half_damage_to[5].name,
                    seven_half_damage_to: !response.data.damage_relations.half_damage_to[6] ? "" : response.data.damage_relations.half_damage_to[6].name,
                    height_half_damage_to: !response.data.damage_relations.half_damage_to[7] ? "" : response.data.damage_relations.half_damage_to[7].name,
                    nine_half_damage_to: !response.data.damage_relations.half_damage_to[8] ? "" : response.data.damage_relations.half_damage_to[8].name,
                    ten_half_damage_to: !response.data.damage_relations.half_damage_to[9] ? "" : response.data.damage_relations.half_damage_to[9].name,
                    eleven_half_damage_to: !response.data.damage_relations.half_damage_to[10] ? "" : response.data.damage_relations.half_damage_to[10].name,
                    twelve_half_damage_to: !response.data.damage_relations.half_damage_to[11] ? "" : response.data.damage_relations.half_damage_to[11].name,
                    first_no_damage_from: !response.data.damage_relations.no_damage_from[0] ? "" : response.data.damage_relations.no_damage_from[0].name,
                    second_no_damage_from: !response.data.damage_relations.no_damage_from[1] ? "" : response.data.damage_relations.no_damage_from[1].name,
                    third_no_damage_from: !response.data.damage_relations.no_damage_from[2] ? "" : response.data.damage_relations.no_damage_from[2].name,
                    four_no_damage_from: !response.data.damage_relations.no_damage_from[3] ? "" : response.data.damage_relations.no_damage_from[3].name,
                    five_no_damage_from: !response.data.damage_relations.no_damage_from[4] ? "" : response.data.damage_relations.no_damage_from[4].name,
                    six_no_damage_from: !response.data.damage_relations.no_damage_from[5] ? "" : response.data.damage_relations.no_damage_from[5].name,
                    seven_no_damage_from: !response.data.damage_relations.no_damage_from[6] ? "" : response.data.damage_relations.no_damage_from[6].name,
                    height_no_damage_from: !response.data.damage_relations.no_damage_from[7] ? "" : response.data.damage_relations.no_damage_from[7].name,
                    nine_no_damage_from: !response.data.damage_relations.no_damage_from[8] ? "" : response.data.damage_relations.no_damage_from[8].name,
                    ten_no_damage_from: !response.data.damage_relations.no_damage_from[9] ? "" : response.data.damage_relations.no_damage_from[9].name,
                    eleven_no_damage_from: !response.data.damage_relations.no_damage_from[10] ? "" : response.data.damage_relations.no_damage_from[10].name,
                    twelve_no_damage_from: !response.data.damage_relations.no_damage_from[11] ? "" : response.data.damage_relations.no_damage_from[11].name,
                    first_no_damage_to: !response.data.damage_relations.no_damage_to[0] ? "" : response.data.damage_relations.no_damage_to[0].name,
                    second_no_damage_to: !response.data.damage_relations.no_damage_to[1] ? "" : response.data.damage_relations.no_damage_to[1].name,
                    third_no_damage_to: !response.data.damage_relations.no_damage_to[2] ? "" : response.data.damage_relations.no_damage_to[2].name,
                    four_no_damage_to: !response.data.damage_relations.no_damage_to[3] ? "" : response.data.damage_relations.no_damage_to[3].name,
                    five_no_damage_to: !response.data.damage_relations.no_damage_to[4] ? "" : response.data.damage_relations.no_damage_to[4].name,
                    six_no_damage_to: !response.data.damage_relations.no_damage_to[5] ? "" : response.data.damage_relations.no_damage_to[5].name,
                    seven_no_damage_to: !response.data.damage_relations.no_damage_to[6] ? "" : response.data.damage_relations.no_damage_to[6].name,
                    height_no_damage_to: !response.data.damage_relations.no_damage_to[7] ? "" : response.data.damage_relations.no_damage_to[7].name,
                    nine_no_damage_to: !response.data.damage_relations.no_damage_to[8] ? "" : response.data.damage_relations.no_damage_to[8].name,
                    ten_no_damage_to: !response.data.damage_relations.no_damage_to[9] ? "" : response.data.damage_relations.no_damage_to[9].name,
                    eleven_no_damage_to: !response.data.damage_relations.no_damage_to[10] ? "" : response.data.damage_relations.no_damage_to[10].name,
                    twelve_no_damage_to: !response.data.damage_relations.no_damage_to[11] ? "" : response.data.damage_relations.no_damage_to[11].name,
                });
                setTypeChosen(true);
            }
        );
    }

    return (
        <>
            <div className="PokemonTypeApp">
                <div className="cards border text-light pt-4">
                    <div className="d-flex justify-content-center display-1 ">
                        {!typeChosen ? (<h1>Pokemon Type : Please choose a Type !</h1>) : (<h1>Pokemon Type : {typeName}</h1>)}
                    </div>
                    <form onSubmit={searchType} className="row my-4 justify-content-center">
                        <div className="col-3">
                            <input type="text" className="form-control" name="typeName" autoComplete="off" placeholder="Type Name" onChange={(event) => {
                                setTypeName(event.target.value)
                            }}
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary">Search Type</button>
                        </div>
                    </form>
                    {!type.first_double_damage_from ? null :
                    <div className="row">
                        <div className="col-4">
                            <div className="container text-center mb-4 text-danger">
                                {!type.first_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}</h5>
                                </>
                                :
                                !type.third_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}</h5>
                                </>
                                :
                                !type.four_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}</h5>
                                </>
                                :
                                !type.five_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}</h5>
                                </>
                                :
                                !type.six_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}</h5>
                                </>
                                :
                                !type.seven_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}</h5>
                                </>
                                :
                                !type.height_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}</h5>
                                </>
                                :
                                !type.nine_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}, {type.height_double_damage_from}</h5>
                                </>
                                :
                                !type.ten_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}, {type.height_double_damage_from}, {type.nine_double_damage_from}</h5>
                                </>
                                :
                                !type.eleven_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}, {type.height_double_damage_from}, {type.nine_double_damage_from}, {type.ten_double_damage_from}</h5>
                                </>
                                :
                                !type.twelve_double_damage_from ?
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}, {type.height_double_damage_from}, {type.nine_double_damage_from}, {type.ten_double_damage_from}, {type.eleven_double_damage_from}</h5>
                                </>
                                :
                                <>
                                    <h5>Double damage from :</h5>
                                    <h5>{type.first_double_damage_from}, {type.second_double_damage_from}, {type.third_double_damage_from}, {type.four_double_damage_from}, {type.five_double_damage_from}, {type.six_double_damage_from}, {type.seven_double_damage_from}, {type.height_double_damage_from}, {type.nine_double_damage_from}, {type.ten_double_damage_from}, {type.eleven_double_damage_from}, {type.twelve_double_damage_from}</h5>
                                </>
                                }
                            </div>
                            <div className="container text-center mb-4 text-success">
                                {!type.first_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}</h5>
                                </>
                                :
                                !type.third_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}</h5>
                                </>
                                :
                                !type.four_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}</h5>
                                </>
                                :
                                !type.five_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}</h5>
                                </>
                                :
                                !type.six_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}</h5>
                                </>
                                :
                                !type.seven_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}</h5>
                                </>
                                :
                                !type.height_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}</h5>
                                </>
                                :
                                !type.nine_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}, {type.height_double_damage_to}</h5>
                                </>
                                :
                                !type.ten_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}, {type.height_double_damage_to}, {type.nine_double_damage_to}</h5>
                                </>
                                :
                                !type.eleven_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}, {type.height_double_damage_to}, {type.nine_double_damage_to}, {type.ten_double_damage_to}</h5>
                                </>
                                :
                                !type.twelve_double_damage_to ?
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}, {type.height_double_damage_to}, {type.nine_double_damage_to}, {type.ten_double_damage_to}, {type.eleven_double_damage_to}</h5>
                                </>
                                :
                                <>
                                    <h5>Double damage to :</h5>
                                    <h5>{type.first_double_damage_to}, {type.second_double_damage_to}, {type.third_double_damage_to}, {type.four_double_damage_to}, {type.five_double_damage_to}, {type.six_double_damage_to}, {type.seven_double_damage_to}, {type.height_double_damage_to}, {type.nine_double_damage_to}, {type.ten_double_damage_to}, {type.eleven_double_damage_to}, {type.twelve_double_damage_to}</h5>
                                </>
                                }
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="container text-center mb-4 text-danger">
                                {!type.first_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}</h5>
                                </>
                                :
                                !type.third_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}</h5>
                                </>
                                :
                                !type.four_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}</h5>
                                </>
                                :
                                !type.five_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}</h5>
                                </>
                                :
                                !type.six_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}</h5>
                                </>
                                :
                                !type.seven_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}</h5>
                                </>
                                :
                                !type.height_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}</h5>
                                </>
                                :
                                !type.nine_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}, {type.height_half_damage_from}</h5>
                                </>
                                :
                                !type.ten_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}, {type.height_half_damage_from}, {type.nine_half_damage_from}</h5>
                                </>
                                :
                                !type.eleven_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}, {type.height_half_damage_from}, {type.nine_half_damage_from}, {type.ten_half_damage_from}</h5>
                                </>
                                :
                                !type.twelve_half_damage_from ?
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}, {type.height_half_damage_from}, {type.nine_half_damage_from}, {type.ten_half_damage_from}, {type.eleven_half_damage_from}</h5>
                                </>
                                :
                                <>
                                    <h5>Half damage from :</h5>
                                    <h5>{type.first_half_damage_from}, {type.second_half_damage_from}, {type.third_half_damage_from}, {type.four_half_damage_from}, {type.five_half_damage_from}, {type.six_half_damage_from}, {type.seven_half_damage_from}, {type.height_half_damage_from}, {type.nine_half_damage_from}, {type.ten_half_damage_from}, {type.eleven_half_damage_from}, {type.twelve_half_damage_from}</h5>
                                </>
                                }
                            </div>
                            <div className="container text-center mb-4 text-success">
                                {!type.first_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}</h5>
                                </>
                                :
                                !type.third_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}</h5>
                                </>
                                :
                                !type.four_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}</h5>
                                </>
                                :
                                !type.five_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}</h5>
                                </>
                                :
                                !type.six_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}</h5>
                                </>
                                :
                                !type.seven_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}</h5>
                                </>
                                :
                                !type.height_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}</h5>
                                </>
                                :
                                !type.nine_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}, {type.height_half_damage_to}</h5>
                                </>
                                :
                                !type.ten_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}, {type.height_half_damage_to}, {type.nine_half_damage_to}</h5>
                                </>
                                :
                                !type.eleven_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}, {type.height_half_damage_to}, {type.nine_half_damage_to}, {type.ten_half_damage_to}</h5>
                                </>
                                :
                                !type.twelve_half_damage_to ?
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}, {type.height_half_damage_to}, {type.nine_half_damage_to}, {type.ten_half_damage_to}, {type.eleven_half_damage_to}</h5>
                                </>
                                :
                                <>
                                    <h5>Half damage to :</h5>
                                    <h5>{type.first_half_damage_to}, {type.second_half_damage_to}, {type.third_half_damage_to}, {type.four_half_damage_to}, {type.five_half_damage_to}, {type.six_half_damage_to}, {type.seven_half_damage_to}, {type.height_half_damage_to}, {type.nine_half_damage_to}, {type.ten_half_damage_to}, {type.eleven_half_damage_to}, {type.twelve_half_damage_to}</h5>
                                </>
                                }
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="container text-center mb-4 text-danger">
                                {!type.first_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}</h5>
                                </>
                                :
                                !type.third_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}</h5>
                                </>
                                :
                                !type.four_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}</h5>
                                </>
                                :
                                !type.five_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}</h5>
                                </>
                                :
                                !type.six_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}</h5>
                                </>
                                :
                                !type.seven_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}</h5>
                                </>
                                :
                                !type.height_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}</h5>
                                </>
                                :
                                !type.nine_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}, {type.height_no_damage_from}</h5>
                                </>
                                :
                                !type.ten_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}, {type.height_no_damage_from}, {type.nine_no_damage_from}</h5>
                                </>
                                :
                                !type.eleven_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}, {type.height_no_damage_from}, {type.nine_no_damage_from}, {type.ten_no_damage_from}</h5>
                                </>
                                :
                                !type.twelve_no_damage_from ?
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}, {type.height_no_damage_from}, {type.nine_no_damage_from}, {type.ten_no_damage_from}, {type.eleven_no_damage_from}</h5>
                                </>
                                :
                                <>
                                    <h5>Immune from :</h5>
                                    <h5>{type.first_no_damage_from}, {type.second_no_damage_from}, {type.third_no_damage_from}, {type.four_no_damage_from}, {type.five_no_damage_from}, {type.six_no_damage_from}, {type.seven_no_damage_from}, {type.height_no_damage_from}, {type.nine_no_damage_from}, {type.ten_no_damage_from}, {type.eleven_no_damage_from}, {type.twelve_no_damage_from}</h5>
                                </>
                                }
                            </div>
                            <div className="container text-center mb-4 text-success">
                                {!type.first_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>nothing</h5>
                                </>
                                :
                                !type.second_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}</h5>
                                </>
                                :
                                !type.third_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}</h5>
                                </>
                                :
                                !type.four_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}</h5>
                                </>
                                :
                                !type.five_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}</h5>
                                </>
                                :
                                !type.six_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}</h5>
                                </>
                                :
                                !type.seven_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}</h5>
                                </>
                                :
                                !type.height_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}</h5>
                                </>
                                :
                                !type.nine_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}, {type.height_no_damage_to}</h5>
                                </>
                                :
                                !type.ten_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}, {type.height_no_damage_to}, {type.nine_no_damage_to}</h5>
                                </>
                                :
                                !type.eleven_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}, {type.height_no_damage_to}, {type.nine_no_damage_to}, {type.ten_no_damage_to}</h5>
                                </>
                                :
                                !type.twelve_no_damage_to ?
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}, {type.height_no_damage_to}, {type.nine_no_damage_to}, {type.ten_no_damage_to}, {type.eleven_no_damage_to}</h5>
                                </>
                                :
                                <>
                                    <h5>Immune to :</h5>
                                    <h5>{type.first_no_damage_to}, {type.second_no_damage_to}, {type.third_no_damage_to}, {type.four_no_damage_to}, {type.five_no_damage_to}, {type.six_no_damage_to}, {type.seven_no_damage_to}, {type.height_no_damage_to}, {type.nine_no_damage_to}, {type.ten_no_damage_to}, {type.eleven_no_damage_to}, {type.twelve_no_damage_to}</h5>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                }
                </div>
                
            </div>
        </>
    );
}

export default PokemonTypeApp;