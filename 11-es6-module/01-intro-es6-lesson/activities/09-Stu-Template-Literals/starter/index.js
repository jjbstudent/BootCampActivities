// music should be an object with title, artist, and album properties
const music = {
  // code here
  artist:"tupac",
  title:"When we ride",
  album:""

};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  <h1>{}

  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

