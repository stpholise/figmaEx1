
import { PropTypes } from 'prop-types'

const SearchBar = ({posts, setSearchResults}) => { 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    const handleSearch  = (e) => {
        console.log(e.target.value)
        if(!e.target.value) {
            setSearchResults(posts)
            return;
        }
        const results = posts.filter((post) => {
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
    }

return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="search" 
                placeholder="Search Posts"
                onChange={(e) => handleSearch(e)}
            />

        </form>
    </div>
  )
}

SearchBar.propTypes = {
    posts: PropTypes.array.isRequired,
    setSearchResults: PropTypes.func.isRequired
}

export default SearchBar