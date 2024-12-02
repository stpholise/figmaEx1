import { useState, useEffect, useCallback } from 'react'

import  Post from '../components/Post'
import AddPost from '../components/AddPost'



const FccTest = () => {
    // const uniqueId  = uuidv4();
    const [posts, setPosts] = useState([]);
    const [ limit, setLimit ] = useState(6)

    const fetchPosts = useCallback(async () => {
        const settings = {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          }
      };
      try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`, settings)
          const data = await response.json()
          setPosts(data)
        }
        catch(err)  {
          console.log(err)
        }
    
      }, [limit])
  
      useEffect(() => {
        fetchPosts()
      }, [fetchPosts]);
    
      

      const deletePost = async (id) => {
        const settings = {
          method:'DELETE'
        }
        try{ 
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, settings)
           // Check if the response is successful (HTTP status 2xx)
          if (!response.ok) {
            throw new Error(`Failed to delete post with ID ${id}. Status: ${response.status}`);
          }
          console.log(`Post with ID ${id} deleted successfully. Status: ${response.status}`);
          setPosts( posts.filter((post) => post.id !== id))
         
        }
        catch (error) {
          console.log(error)
        }
        
      };

      const viewMore = () => {
        setLimit((limit) => {
          return (limit < 80) ? limit + 6 : limit
        })
      }




  return (
    <>
        <main>
          <h1>Consuming REST api tutorial</h1>
          <AddPost 
            setPosts={setPosts}
          />
          <section className="posts-container">
          <h2>Posts</h2>
            {posts && posts.map((post) =>   //check if posts is null or undifined before accessing posts 
              <Post 
                key={post.id} 
                id={post.id}
                title={post.title} 
                body={post.body} 
                deletePost={deletePost}
              />
            )}
          </section>
          <button type='button' onClick={() => viewMore()}>view more</button>
      </main>
    </>
  )
}

export default FccTest