import { useState } from 'react';
import './SearchForm.css';


//create a list of fucntions and send back to home. 
//we will need props




function SearchForm(props) {

    const searchHandler = (e) => {
        e.preventDefault();
        const enteredFilters={ 
            "claClaim": e.target.claClaim.value,
            "handlerName": e.target.handlerName.value,
            "claPolicy": e.target.claPolicy.value
        }
        props.onSaveEnteredFilters(enteredFilters);
    }

    return (
        <div className="search-container">
            <form className='form-search' onSubmit={searchHandler}>
                <label>Claim number:</label>
                <input type="text" name="claClaim" ></input>
                <label>Handler:</label>
                <input type="text"  name="handlerName" ></input>
                <label>Policy:</label>
                <input type="text"  name="claPolicy"></input>
                <input  className="send-button" type="submit" value="Submit"></input>
            </form>
        </div>
    );

}

export default SearchForm;