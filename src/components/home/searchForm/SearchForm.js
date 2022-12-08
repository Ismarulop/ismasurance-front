import './SearchForm.css';

function SearchForm() {
    return (
            <div className="search-container">
                <form className='form-search'>
                    <label>Claim number:</label>
                    <input type="text"></input>
                    <label>Handler:</label>
                    <input type="text"></input>
                    <label>Policy:</label>
                    <input type="text"></input>
                    <button className="send-button" type="submit" >Search</button>
                </form>
            </div>
    );

}

export default SearchForm;