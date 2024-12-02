import { getPosts } from '../Components/Api';
import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar'

const Posts = () => {
    const [ posts, setPosts ] = useState([])
    const [ searchResults, setSearchResults ] = useState([])

    
    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
            setSearchResults(data); // Set search results to initial posts data
        });
    }, [])

console.log(posts)

    return (
        <>
        <SearchBar searchResults={searchResults} posts={posts} setSearchResults={setSearchResults} />
         <div>
            
            {
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h4>{post.title}</h4>
                        <p> {post.body}</p>
                    </div>
                ))
            }
         </div>

        </>
    )

}

export default Posts;