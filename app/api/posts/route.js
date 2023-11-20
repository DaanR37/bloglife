// import { NextResponse } from 'next/server';

export async function POST(request) {
  // Extract the form data
  const data = await request.formData();
  const file = data.get('image');
  const title = data.get('title');
  const content = data.get('content');
  const category_id = data.get('category_id');

  if (!file) {
    return new Response(JSON.stringify({ success: false, error: "File is missing" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Prepare the form data to send to the external API
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('category_id', category_id);
  formData.append('image', file);

  // External API URL
  const postsEndpoint = process.env.NEXT_PUBLIC_API_URL + '/api/posts';

  try {
    // Make the POST request to the external API
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

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(`Fetch Error: ${error.message}`);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}