// Bookmarklets!
// Please make sure that you replace all the  "" with ''
// Just ignore the %27 error that your code editor is giving.

const codes = [
  {
    id: 1,
    code: `javascript: (() => {
      var word = prompt('Please enter the word here. ');
      const url =
        'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' +
        word +
        '?key=c729ef1d-a2d8-4fe6-92e9-a98845e2fb95';
      const call = async (word) => {
        const request = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const synArray = data[0].meta.syns[0];
            window.alert(synArray);
          });
      };
      call(word);
    })();`,
    note: 'Just follow the guide down below.',
    title: ' Quick Synonym Finder  ',
    desc: 'Just throw your word in the input box and it will return a list of synonyms.',
  },
  {
    id: 2,
    code: ` javascript: (function () {
      var speed = prompt('Enter your preferable speed. ');
      if (speed !== null) {
        document.getElementsByClassName(%27html5-main-video%27)[0].playbackRate = speed;
      } else {
        var a = prompt(you're Dumb :( );
      }
    })();`,
    note: 'Just follow the guide down below.',
    title: ' Youtube playback speed++ ',
    desc: ' Increase the speed of your youtube video, with the help of this bookmarklet, even more than 2X!',
  },
];

const steps = [
  {
    label: 'Right Click on the Bookmarks bar.',
    description: `For each setting up Clickables, Copy the Clickable's Code from the dropdowns and then Right click on the bookmarks bar, Click on "Add Page..." option. `,
  },
  {
    label: 'Fill in the details',
    description:
      'Fill up the name of the Clickable which will be displayed on the bookmarks bar and paste the clickable code inside the URL section. Click on save. ',
  },
];

export default { codes, steps };
