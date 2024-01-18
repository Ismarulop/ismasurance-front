import './Home.css';
import SearchForm from './searchForm/SearchForm';
import ClaimsScreen from './claimsScreen/ClaimsScreen';
import Navigation from '../../layouts/Navigation';
import { useState } from 'react';



function Home() {

    const [enteredFilters, setEnteredFilters] = useState({
        "claClaim": "",
        "handlerName": "",
        "claPolicy": ""
    });

    const searchFilterHandler = (enteredFilters) => {
        const claimsList = {
            ...enteredFilters,
            id: Math.random().toString()
        }


        setEnteredFilters(enteredFilters);
    }

    return (
        <div className="fullPage">
            <Navigation></Navigation>
            <div className='main'>
                <SearchForm onSaveEnteredFilters={searchFilterHandler} />
                <ClaimsScreen searchFilters={enteredFilters} />
            </div>
        </div>
    );
}

export default Home;