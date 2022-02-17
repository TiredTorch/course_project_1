import { getDataFromServer } from '~/utils/helper';
import {} from 'dotenv/config'; 

export const getUsersWithPostsAndComments = async() => {
  try {
    const users = getDataFromServer(process.env.USERS_URL);
    const posts = getDataFromServer(process.env.POSTS_URL);
    const comments = getDataFromServer(process.env.COMMENTS_URL);

    const responseFromServer = await Promise.all([users, posts, comments]);

    const usersAPI = responseFromServer[0];
    const postsAPI = responseFromServer[1];
    const commentsAPI = responseFromServer[2];

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

