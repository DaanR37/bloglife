const fs = require('fs');
const path = require('path');

/// Temporary storage of image file when uploading it to the form
const uploadDir = path.join(__dirname, 'public/uploads');

if (!fs.existsSync(uploadDir)) {
  console.log(`Directory not found: ${uploadDir}. Creating...`);
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Directory created: ${uploadDir}`);
} else {
  console.log(`Directory already exists: ${uploadDir}`);
}
