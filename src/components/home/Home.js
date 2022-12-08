import './Home.css';
import SearchForm from './searchForm/SearchForm';
import ClaimsScreen from './claimsScreen/ClaimsScreen';

function Home() {
    return (
        <div className="main">
        <SearchForm/>
        <ClaimsScreen/>
        </div>
    );
}

export default Home;