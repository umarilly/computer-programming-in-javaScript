/**
 * Async/Await Example 4
 * 
 * This example demonstrates how to handle errors in async/await functions.
 * We use the JSONPlaceholder API to fetch user data and their posts.
 */

async function fetchUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with status: ${response.status}`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

async function fetchUserPosts(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts with status: ${response.status}`);
    }
    const postsData = await response.json();
    return postsData;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

async function main() {
  const userId = 1;
  try {
    const user = await fetchUser(userId);
    console.log('User:', user);
    const posts = await fetchUserPosts(userId);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main(); 


