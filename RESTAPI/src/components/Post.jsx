import {PropTypes } from 'prop-types'

const Post = ({id, title, body, deletePost}) => {
    console.log({'id':id, 'title': title, 'body': body, 'deletePost': deletePost})
  return (
    <div className="post-card">
        <h2 className="post-title">{title}</h2>
        <p className="post-body">{body}</p>
        <button 
            className="btn-delete" 
            onClick={() => deletePost(id)}
        >
            Delete
        </button>
    </div>
  )
}

Post.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
}

export default Post