// import axios from 'axios'

// export const api = axios.create({
//     baseUrl : 'https://jsonplaceholder.typicode.com'
// })

// export const getPosts = async () => {
//     const response = await api.get('/posts')
//     return response.data
// }

// import { useEffect } from 'react'


// export const Api = () => {
//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//             const response = await fetch('https://jsonplaceholder.typicode.com')
//             const data = response.json()
//             return data
//             } catch(error) {
//                 console.log(error)
//             }
//         }
//         fetchData()
//     }, [])
//     return (
//         <div>
//             <h1>Api</h1>
//         </div>
//     )
// }

export const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return null;
    }
};