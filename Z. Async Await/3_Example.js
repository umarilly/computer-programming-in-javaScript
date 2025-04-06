/**
 * Async/Await Example 3
 * 
 * This example demonstrates fetching user data and their posts using async/await.
 * We use the JSONPlaceholder API which provides mock data for testing.
 * 
 * The async/await pattern allows us to handle multiple sequential API calls
 * in a clean, readable way while properly handling errors.
 */

async function fetchUser(userId) {
  // Fetch user data from the API
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with status: ${response.status}`);
  }
  const userData = await response.json();
  return userData;
}

async function fetchUserPosts(userId) {
  // Fetch posts for a specific user
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts with status: ${response.status}`);
  }
  const posts = await response.json();
  return posts;
}

// Using the async functions
async function main() {
  console.log('Fetching user and post data...');
  try {
    // Get a user by ID
    const userId = 1;
    const user = await fetchUser(userId);
    console.log(`User: ${user.name} (${user.email})`);
    
    // Get the user's posts
    const posts = await fetchUserPosts(userId);
    console.log(`Found ${posts.length} posts by ${user.name}`);
    
    // Display the titles of the first 3 posts
    console.log('\nRecent post titles:');
    posts.slice(0, 3).forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

main();
