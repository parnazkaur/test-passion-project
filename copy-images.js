const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/pkaur29/Downloads/Child Trafficking Photos';
const targetDir = path.join(__dirname, 'public', 'images');
const storiesDir = path.join(targetDir, 'stories');

// Create directories
fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(storiesDir, { recursive: true });

// Copy main images
const mainImages = ['hero-photo.jpg', 'DSC01053.jpg'];
mainImages.forEach(img => {
  const source = path.join(sourceDir, img);
  const target = path.join(targetDir, img);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`Copied ${img} to ${target}`);
  } else {
    console.error(`Source file not found: ${source}`);
  }
});

// Copy story images
const storyImages = ['DSC00845.jpg', 'DSC01057.jpg', 'DSC03043.jpg', 'DSC03044.jpg', 'DSC03087.jpg', 'DSC03093.jpg', 'DSC03094.jpg'];
storyImages.forEach(img => {
  const source = path.join(sourceDir, img);
  const target = path.join(storiesDir, img);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`Copied ${img} to ${target}`);
  } else {
    console.error(`Source file not found: ${source}`);
  }
});

console.log('All images copied successfully!');

