## You who pass, here be dragons
This repo contains code and docs for my book my show assignment which I completed as per their interview process.

The original assignment is here:
https://www.dropbox.com/s/m65isq9lzbjekd9/Dev%20Hiring%20Assignment%20-%20SDE3%20-%202019.pdf?dl=0

### Assignment #1: (Shashanka + Netflix = Shankflix)
Live Link: https://bitly.com/shashankas-bms-assignment
Code: https://codesandbox.io/s/highlight-reel-crpdv

A few bits of information about this:

1. The deployed site is responsive, and works on phones, tablets and desktop resolutions
2. Initially when the page loads, the user is presented with a dummy layout, the images and details are hydrated when the webpage receives a response from the provided API
3. For efficiency, the images are all lazy loaded, scrolling down loads the other images
3. When the user clicks on any of the thumbnails:
     a. A new row is inserted in the layout just above the thumbnail that was clicked, this new inserted row obeys the layout
     b. The corresponding video starts playing automatically
     c. The browser centers the video in the screen
     d. The thumbnail clicked is highlighted with an arrow pointing toward the video playing
4. When the user clicks on a new thumbnail, if a previous movie was playing, it is destroyed and #3 is repeated again
5. Resizing the screen, doesn't automatically resize the video, however, clicking on a new thumbnail instantly resizes the layout and starts playing the movie in the new layout

Implementation Details:

I have used React Hooks extensively. For state management, since this was a simple application, I have used the useContext API.

What I would improve next if this was a real project:

1. The colour scheme 
2. Better quality of information shown in the preview
3. Service workers
4. Paging & Filtering
5. Unit Testing

### Assignment #2: 
https://docs.google.com/presentation/d/11zd-s88iK0TkDNqVZd-4G7GFZT1g_SGZZuF5082gRnw/edit?usp=sharing

