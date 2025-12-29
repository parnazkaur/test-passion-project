#!/bin/bash

# Create directories
mkdir -p public/images/stories

# Copy main images
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/hero-photo.jpg" public/images/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC01053.jpg" public/images/

# Copy story images
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC00845.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC01057.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC03043.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC03044.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC03087.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC03093.jpg" public/images/stories/
cp "/Users/pkaur29/Downloads/Child Trafficking Photos/DSC03094.jpg" public/images/stories/

echo "Images copied successfully!"
ls -la public/images/
ls -la public/images/stories/

