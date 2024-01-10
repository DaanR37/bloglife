// import { NextResponse } from 'next/server';
export async function POST(request) {

  /// Extract the formdata
  const data = await request.formData();
  const file = data.get('image');
  const title = data.get('title');
  const content = data.get('content');
  const category_id = data.get('category_id');

  /// Input validation with error message when files are missing
  if (!title || !file || !content || !category_id) {
    return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  /// Create a new FormData object and Prepare the formdata for sending to the external API
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('category_id', category_id);
  formData.append('image', file);

  /// External API URL - concatenation of the base url with /api/posts
  const postsEndpoint = process.env.NEXT_PUBLIC_API_URL + '/api/posts';

  try {
    /// Make the POST request to the external API - use of token only at the server-side and NOT at client-side
    const response = await fetch(postsEndpoint, {
      method: 'POST',
      headers: {
        'token': process.env.NEXT_PUBLIC_TOKEN,
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    /// Send the response back to client/browser in json format
    const result = await response.json();
    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(`Fetch Error: ${error.message}`);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}