import { useSelector } from "react-redux";
import { selectAll } from "./postsSlice";

const PostsList = () => {
  //   const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAll);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
