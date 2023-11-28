export default function Search({ searchValue, setSearchValue }) {
// seachValue propss is a placeholder for the state that we are expecting
//seSearchValue props is a placeholder for the "update state"

const handleSubmit = (e) => {
    e.preventDefault();

}


    return(
        <form>
            <input
            type="sarch"
            value={searchValue(e.trget.value)}
            onChange={e => setSearchValue(e.target.value)}
            />

            <button>Submit</button>
        </form>
    )
}