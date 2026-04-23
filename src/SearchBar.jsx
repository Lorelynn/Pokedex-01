import searchLogo from './assets/searchLogo.png';

function SearchBar({ search, setSearch }) {
    return (
        <div className='Search'>
            <img src={searchLogo} alt='search'/>
            <input  
                type='text' 
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />  
        </div>
    );
}

export default SearchBar;