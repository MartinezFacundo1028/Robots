import "./search.css"
const Search = ({search}) =>{
    return(
        <div  className="container">
            <input
            className="search-input"
            type="search"
            placeholder="Buscar robot"   
            onChange={search}
            />
        </div>
    )
}

export default Search;
