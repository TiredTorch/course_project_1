/* eslint-disable no-console */
import axios from 'axios';

export const getUsersWithPostsAndComments = async() => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');

    const usersAPI = users.data;
    const postsAPI = posts.data;
    const commentsAPI = comments.data;

    const usersWithPosts = usersAPI;
    const postsWithComments = postsAPI;

    for (const iterator of postsWithComments) {
      iterator.comments = [];
    }

    for (const iterator of usersWithPosts) {
      iterator.posts = [];
    }

    for (const iterator of commentsAPI) {
      const currentPost = postsWithComments.find(element => element.id === iterator.postId);

      if (currentPost === undefined) {
        continue;
      }

      delete iterator.postId;
      currentPost['comments'].push(iterator);
    }

    for (const iterator of postsAPI) {
      const currentUser = usersWithPosts.find(element => element.id === iterator.userId);

      if (currentUser === undefined) {
        continue;
      }

      delete iterator.userId;
      currentUser['posts'].push(iterator);
    }

    return usersWithPosts;

  } catch (error) {
    return null;
  }
};

getUsersWithPostsAndComments();
