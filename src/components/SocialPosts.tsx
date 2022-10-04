import Post from "../models/Post";
import PostInList from "./PostInList";
import "./SocialPosts.css";

interface Props {
  posts: Post[];
}

const SocialPosts = ({ posts }: Props) => {
  return (
    <div className="SocialPosts">
      <ul>
        {posts.map((post, i) => (
          <PostInList key={i} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
