import React, { useEffect, useState } from 'react';
import './ClaimsScreen.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import DeleteClaimButton from './buttons/DeleteClaimButton';

function ClaimScreen(props) {
    const [claims, setClaims] = useState([]);
    const { register, handleSubmit, formState: {
        errors } } = useForm();
    const [searchFilters, setSearchFilters] = useState(props.searchFilters);

    useEffect(() => {
        axios
            .post('http://localhost:8080/claim/searchClaim', props.searchFilters)
            .then(res => {
                console.log(res);
                setClaims(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [props.searchFilters])

    const fetchClaims = () => {
        axios
            .get('http://localhost:8080/claim/claims')
            .then(res => {
                setClaims(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    const onSubmit = claimRequest => {
        // axios
        // .post('http://localhost:8080/claim/newClaim')
        // .then(fetchClaims)
        // .catch(errors=>{
        //     console.log(errors.message);
        // })

        fetch('http://localhost:8080/claim/newClaim', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(claimRequest)
        }).then(fetchClaims)
            .catch(errors => {
                console.log(errors);
            })

    }

    const deleteClaim = (claim) => {
        console.log(claim);
        axios
            .delete('http://localhost:8080/claim/deleteClaim/' + claim.id)
            .then(res => {
                setClaims(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div >
            <div>
                <form id="add-new-claim-form" onSubmit={handleSubmit(onSubmit)}>
                    <button className="add-claim-button" type="submit">Add new claim</button>
                    <label>Policy</label>
                    <input id="policy-input" type="text" name="claPolicy"
                        {...register("claPolicy", {
                            required: {
                                value: true,
                                message: "*This field is mandatory"
                            }

                        })}
                    ></input>
                    <div className="error-text-validation">
                        {errors.claPolicy && <span>{errors.claPolicy.message}</span>}
                    </div>
                    <label>Handler</label>
                    <input id="handler-input" type="text" name="handlerName"
                        {...register("handlerName", {
                            required: {
                                value: true,
                                message: "*This field is mandatory"
                            }

                        })}
                    ></input>
                    <div className="error-text-validation">
                        {errors.handlerName && <span>{errors.handlerName.message}</span>}
                    </div>
                    <label>Insured</label>
                    <input id="insured-input" type="text" name="insuredName"
                        {...register("insuredName", {
                            required: {
                                value: true,
                                message: "*This field is mandatory"
                            }
                        })}></input>

                    <div className="error-text-validation">
                        {errors.insuredName && <span>{errors.insuredName.message}</span>}
                    </div>
                    <label>Date</label>
                    <input id="claim-date-input" type="date" name="incidenceDate"
                        {...register("incidenceDate", {
                            required: {
                                value: true,
                                message: "*This field is mandatory"
                            }

                        })}></input>
                    <div className="error-text-validation">
                        {errors.incidenceDate && <span>{errors.incidenceDate.message}</span>}
                    </div>
                </form>
                <br></br>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>Claim</th>
                        <th>Policy</th>
                        <th>Handler</th>
                        <th>Incidence Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {claims.map(claim => (
                        <tr key={claim.id}>
                            <td >{claim.id}</td>
                            <td >{claim.claPolicy}</td>
                            <td>{claim.handlerName}</td>
                            <td >{claim.incidenceDate}</td>
                            <td >
                                <button onClick={() => { deleteClaim(claim) }} claim={claim}><FaRegTrashAlt /> </button>
                                <button><FaEdit /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ClaimScreen;