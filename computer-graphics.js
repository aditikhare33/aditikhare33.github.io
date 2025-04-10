
/*
function displayCoding() {
  const items = [
    { name: 'object generator',
      images: [],
      script: `
            <div class="p5 long" id="object-container">
                <script language="javascript" type="text/javascript" src="/object_generator/script.js"></script>
            </div> `,
      description:`
            <span class="hidden1">
              Modern image generation relies on the following: 
               <li> Very large datasets (often <a href="https://www.universityofcalifornia.edu/news/how-ai-discriminates-and-what-means-your-google-habit-conversation-internet-studies-scholar">biased</a> and <a href="https://www.technologyreview.com/2023/05/02/1072556/we-need-to-bring-consent-to-ai/">taken without consent</a>) </li>
               <li> <a href="https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/">Resource consuming</a> algorithms </li>
              <br>
              This generator has no dataset. It's just a <a href="https://p5js.org/reference/p5/noise/"> random</a> scribble with symmetry added in.
              My intention was to make something like digital cloud watching; I often find myself seeing vases or lamps.
              I wonder what you will see.
            </span>`,
      imageStyling: 'long'
    },
    { name: 'sentient slinkie',
      images: [],
      script: `
            <div class="p5" id="slinkie-container">
                <script language="javascript" type="text/javascript" src="/object_generator/sentient_slinkie.js"></script>
            </div>
              <div class="sliders">
                <div class="slider" id="slinkie-container-size-slider">
                  <label for="size-slider"> Adjust Size</label>
                </div>
                <div class="slider" id="slinkie-container-speed-slider">
                  <label for="speed-slider"> Adjust Speed</label>
                </div>
            </div>`,
      description:`<span class="hidden1"> A rainbow line that draws itself. </span>`,
      imageStyling: 'short'
    },
    {
      name: 'coming soon: secret diary',
      images: ['secret-diary.gif'],
      description: `<span class="hidden1"> This project is inspired by using lemon juice to write a diary entry! I'm working on optimizing it for web. </span>`,
      imageStyling: 'short'
    }
  ]

  let div = ``;
  for (const item of items) {
      let images = ``;
      if (item.images) {
          for (const image of item.images) {
              images +=`<img class="${item.imageStyling}" src="/static/coding/${image}">`;
          }
      }

      let script = item.script ? item.script : '';
      div += `
      <div class="display-item hidden2">
          <h3>${item.name}</h3>
          ${script}
          <div class="display-item-img">
            ${images}
          </div>
          <div class="display-item-img display-item-description translucent text">
                ${item.description}
          </div>
          </div>
      </div>`;
  }
*/
  document.querySelector('#displayContainer').innerHTML = div;

displayCoding();