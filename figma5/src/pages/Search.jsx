import { useEffect, useState } from 'react'

const Search = () => {
    const [ items, setItems ] = useState([]) // to store all the items here 
    const [ filteredItems, setFilteredItems ] = useState([]) //resultant items after filtering 
    const [ visibleCount, setVisibleCount ] = useState(10)
    const [ searchValue, setSearchValue ] = useState('')
    const [ isLoaded, setIsLoaded ] = useState(false)
    // const [searchParam, setSearchParam] = useState(["capital", "name"]);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            },delay);
        }
    }

    const handleSearch = debounce((e) => { 
        const  value  = e.target.value.toLowerCase();
        setSearchValue(value);
        if(value === ''){
            setFilteredItems(items);
        } else{
           setItems(
                items.filter(
                    (item) => item.name.toLowerCase().includes(searchValue)))
        }
        console.log(value)
    }, 500);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setItems(data) 
            setFilteredItems(data); // Initialize with full list 
            setIsLoaded(true)
            } catch(error) {
                setIsLoaded(true)
                console.log(error)
            }
        }
        fetchData()
    }, [])


    const loadMore = () => {
        setVisibleCount(visibleCount + 10)
    }

  return (
    <div>
        <input
            type="search" 
            placeholder="Search by name..."
            onKeyUp={handleSearch} 
        />
        {!isLoaded && <p>Loading...</p>}
        {isLoaded &&
            items.slice(0, visibleCount).map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                </div>
            ))
        }
        {visibleCount < filteredItems.length && (
                        <button onClick={loadMore}>Load More</button>
                    )}
            </div>
  )
}

export default Search