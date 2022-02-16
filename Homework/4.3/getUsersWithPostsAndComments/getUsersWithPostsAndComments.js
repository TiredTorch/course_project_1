import axios from 'axios';
import 'regenerator-runtime';
import {} from 'dotenv/config'; 

export const getUsersWithPostsAndComments = async() => {
  try {
    const users = await axios.get(process.env.USERS_URL);
    const posts = await axios.get(process.env.POSTS_URL);
    const comments = await axios.get(process.env.COMMENTS_URL);

    const usersAPI = users.data;
    const postsAPI = posts.data;
    const commentsAPI = comments.data;

    const postsWithComments = postsAPI.map(
      post => ({
        ...post, comments: (
          commentsAPI.filter(comment => post.id === comment.postId)
        ),
      }),
    );

    const usersWithPosts = usersAPI.map(
      user => ({
        ...user, posts: (
          postsWithComments.filter(post => user.id === post.userId)
        ),
      }),
    );

    return usersWithPosts;

  } catch (error) {
    return new Error;
  }
};
