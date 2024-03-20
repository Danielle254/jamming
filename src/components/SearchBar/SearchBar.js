import React from "react"
import "./SearchBar.css"

export default function SearchBar() {

    const [search, setSearch] = React.useState("");

    function updateSearch(event) {
        setSearch(event.target.value);
    }
    return (
        <div className="searchbar">
            <input 
            className="search--input" 
            type="text"
            onChange={updateSearch}
            value={search} />
            <button 
            type="button" 
            className="search--button">Search</button>
        </div>
    )
}