import { useState, useContext } from "react";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import { Postlist } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost, updatePost } = useContext(Postlist); // Assume `updatePost` is available in your context
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({ title: post.title, body: post.body });

  const postImageUrl = post.imageUrl || 'default.jpg';

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updatePost(post.id, editedPost); // Update the post in the context/store
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="card post-card" style={{ maxWidth: "70rem" }}>
      <img
        src={postImageUrl}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        alt={post.title || "Post image"}
      />
      <div className="card-body">
        {isEditing ? (
          <div>
            {/* Edit Mode: Input Fields */}
            <input
              type="text"
              name="title"
              value={editedPost.title}
              onChange={handleInputChange}
              className="form-control mb-2"
              placeholder="Edit Title"
            />
            <textarea
              name="body"
              value={editedPost.body}
              onChange={handleInputChange}
              className="form-control mb-2"
              placeholder="Edit Body"
              rows="3"
            ></textarea>
            <button
              className="btn btn-success"
              onClick={handleSaveClick}
            >
              <MdSave /> Save
            </button>
          </div>
        ) : (
          <div>
            {/* View Mode */}
            <h5 className="card-title">
              {post.title}
              <span
                
                onClick={() => deletePost(post.id)}
                style={{ cursor: "pointer" }}
              >
              
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={handleEditClick}
                style={{ backgroundColor: "blue", border: "none" }}
              >
                <MdEdit /> Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deletePost(post.id)}
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
