import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
}
const PostInList = ({ post }: Props) => {
  return (
    <div className="PostInList">
      <h1>{post.title}</h1>
      <p>{post.thought}</p>
      <p>&#x1F5D1;</p>
    </div>
  );
};

export default PostInList;
