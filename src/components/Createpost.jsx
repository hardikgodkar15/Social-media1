import { Postlist } from "../store/post-list-store";
import { useContext, useRef, useState } from "react";

  const Createpost = () => {
    const {addPost} = useContext(Postlist);

   
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const postImageUrlElement = useRef();
    const [postImageUrl, setpostImageUrl] = useState("");
    

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
    reader.onloadend = () => {
      setpostImageUrl(reader.result);
    };
      reader.readAsDataURL(file);
    }
  };
    
    
    

    const handleSubmit = (event) => {
      event.preventDefault();

     
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;

      const postId = Date.now();
      
      
      addPost( postId, postTitle, postBody, postImageUrl);
      postTitleElement.current.value = '';
      postBodyElement.current.value = '';
      setpostImageUrl("");
     };
  
    return (
         <form className="create-post" onSubmit={handleSubmit}>

    <div className="mb-3">
      <label htmlFor="Title" className="Form-label text-2">Title</label>
      <input type="text" ref={postTitleElement} className="Form-control group2  " id="Title" placeholder="How are you feeling today..." />
     </div>

     <div className="mb-3">
      <label htmlFor="body" className="Form-label text-3">Content</label>
      <textarea type="text" ref={postBodyElement} rows="4" className="Form-control group3" id="body" placeholder="Tell us more..." />
     </div>
     <div className="mb-3 files">
  <label htmlFor="formFile" className="form-label ">file</label>
  <input className="form-control" ref = {postImageUrlElement}type="file" id="formFile" onChange={handleImageChange} />
</div>
    <button type="submit" className="btn btn-primary submit group5">Post</button>
     
     
  </form>
  );
};

export default Createpost;