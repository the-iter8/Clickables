const codes = [
  {
    id: 1,
    code: `(() => {
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
    actualCode: `javascript:(() => {      var word = prompt('Please enter the word here. ');      const url =        'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' +        word +        '?key=c729ef1d-a2d8-4fe6-92e9-a98845e2fb95%27;      const call = async (word) => {        const request = await fetch(url)          .then((response) => response.json())          .then((data) => {            const synArray = data[0].meta.syns[0];            window.alert(synArray);          });      };      call(word);    })();`,
    note: "Just follow the guide down below.",
    title: " Quick Synonym Finder  ",
    desc: "Just throw your word in the input box and it will return a list of synonyms.",
  },
  {
    id: 2,
    code: `(function () {
      var speed = prompt('Enter your preferable speed. ');
      if (speed !== null) {
        document.getElementsByClassName(%27html5-main-video%27)[0].playbackRate = speed;
      } else {
        var a = prompt(you're Dumb :( );
      }
    })();`,
    actualCode: `javascript:  (function () {  var speed = prompt("Enter your preferable Speed?");  if (speed !== null) {    document.getElementsByClassName(%27html5-main-video%27)[0].playbackRate = speed;  } else {    var a = prompt("youre Dumb :( ");  }})();`,
    note: "Just follow the guide down below.",
    title: " Youtube playback speed++ ",
    desc: " Increase the speed of your youtube video, with the help of this bookmarklet, even more than 2X!",
  },
  {
    id: 3,
    code: `eval(
      "function calc() {
        _o = prompt(_t, _z);
        if (_o != "" && _o != null && _o.toUpperCase() == _o.toLowerCase()) _z = eval(_o);
      }"
    );
    _t = "JAVASCRIPTER.NET Calculator - Input the expression to be calculated:";
    _z = "";
    calc();
    while (_o != "" && _o != null && _o.toUpperCase() == _o.toLowerCase()) calc();`,
    actualCode: `javascript:eval('function calc(){_o=prompt(_t,_z);if(_o!=\'\'&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())_z=eval(_o);}');_t='JAVASCRIPTER.NET Calculator - Input the expression to be calculated:';_z='';calc();while(_o!=''&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())calc()`,
    note: "Just follow the guide down below.",
    title: "Calculator",
    desc: "Open a quick calculator anywhere.",
  },
  {
    id: 4,
    code: `(function() {
      function scrollToBottom() {
          window.scrollTo(0, document.documentElement.scrollHeight);
      }
      scrollToBottom();
      setTimeout(function() {
                  var spans = document.querySelectorAll
                  ('span.ytd-thumbnail-overlay-time-status-renderer');
                  var totalSeconds = 0;
                  var count = 0;
                  for (var i = 0; i < spans.length; i++) {
                      var [minutes, seconds] = spans[i].innerText.trim().split(':');
                      totalSeconds += parseInt(minutes) * 60 + parseInt(seconds);
                      count++;
                      spans[i].remove();
                  }
                  var totalMinutes = Math.floor(totalSeconds / 60);
                  var totalHours = Math.floor(totalMinutes / 60);
                  totalMinutes %= 60;
                  var remainingSeconds = totalSeconds % 60;
                  var formattedTime = '';
                  if (totalHours > 0) {
                      formattedTime += totalHours + ' hours ';
                  }
                  formattedTime += totalMinutes + ' minutes' + 
                  (remainingSeconds > 0 ? % 27 % 27 + remainingSeconds 
                    + % 27 seconds % 27 : % 27 % 27);
                  var message = % 27 TL;`,

    actualCode: `javascript:(function () {  function scrollToBottom() {    window.scrollTo(0, document.documentElement.scrollHeight);  }  scrollToBottom();  setTimeout(function () {    var spans = document.querySelectorAll('span.ytd-thumbnail-overlay-time-status-renderer');    var totalSeconds = 0;    var count = 0;    for (var i = 0; i < spans.length; i++) {      var [minutes, seconds] = spans[i].innerText.trim().split(':');      totalSeconds += parseInt(minutes) * 60 + parseInt(seconds);      count++;      spans[i].remove();    }    var totalMinutes = Math.floor(totalSeconds / 60);    var totalHours = Math.floor(totalMinutes / 60);    totalMinutes %= 60;    var remainingSeconds = totalSeconds % 60;    var formattedTime = '';    if (totalHours > 0) {      formattedTime += totalHours + ' hours ';    }    formattedTime += totalMinutes + ' minutes' + (remainingSeconds > 0 ? %27 %27 + remainingSeconds + %27 seconds%27 : %27%27);    var message = %27TL;DR Calculates the time that a playlist will take to be completed. It also temporarily removes the timestamps from the videos to make sure that all of them are calculated.\n\nClickables by iter8 - https://iter8.netlify.app/\nVisit - https://clickables.netlify.app/ for more!%27;    var output = %27Count: %27 + count + %27\nTime: %27 + formattedTime;    alert(message + %27\n\n%27 + output);  }, 2000);})();`,
    note: "Just follow the guide down below.",
    title: "Get playlist duration",
    desc: "Open a youtube playlist, and get total duration of the whole playlist.",
  },
];

const steps = [
  {
    label: "Right Click on the Bookmarks bar.",
    description: `For each setting up Clickables, Copy the Clickable's Code from the dropdowns and then Right click on the bookmarks bar, Click on "Add Page..." option. `,
  },
  {
    label: "Copy code",
    description: "Click on the 'copy' button only. Do not manually copy.",
  },
  {
    label: "Fill in the details",
    description:
      "Fill up the name of the Clickable which will be displayed on the bookmarks bar and paste the clickable code inside the URL section. Click on save. ",
  },
];

const data = { codes, steps };

export default data;
