import { useContext } from "react"
import Post from "./Post"
import { Postlist  as PostlistData } from "../store/post-list-store";

const Postlist = () => {
  const {postlist} = useContext(PostlistData);
    return (
    <>
    {postlist.map((post) => ( 
        <Post key={post.id} post={post}/>
    ))}
    </>
    );

};
export default Postlist;