import {useState} from 'react'
import { PropTypes } from 'prop-types'
import { v4 as uuidv4 } from 'uuid';


const AddPost = ({setPosts}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        setTitle('');
        setBody('');
    };    

    const addPost = async (title, body) => {
        const settings = {
           method: 'POST',
           body: JSON.stringify({
             title: title,
             body: body,
             userId: uuidv4(),
             id: uuidv4(),
           }),
           headers: {
             'Content-Type': 'application/json; charset=UTF-8',
         }
         };
         try{
           const response = await fetch('https://jsonplaceholder.typicode.com/posts', settings)
           const data = await response.json()
           setPosts((prev ) => [data, ...prev])
         
         }
         catch(error) {
           console.log(error)
         }  
     };

  return (
    <form onSubmit={handleSubmit}>
            <h2>Add new Post</h2>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input 
                    name="title" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id='title'
                    placeholder='title'
                />
            </div>
            <div className="input-container">
                <label htmlFor="body">Body</label>
                <textarea 
                    name="body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    id='body'
                >
                </textarea>
            </div>
            <button type="submit" className="btn-submit">Add Post</button>
        </form>
  )
}

AddPost.propTypes = {
    setPosts: PropTypes.func.isRequired,
}


export default AddPost