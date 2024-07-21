const playBtn = document.getElementById('play-rocola');
const cassetteCircles = document.querySelectorAll('.cassette-circle');
const nowPlaying = document.getElementById('now-playing');
const upNext = document.getElementById('up-next');
const requestInput = document.getElementById('request');

const songs = [
  {
    name: 'Stairway to Heaven',
    group: 'Led Zepplin',
  },
  {
    name: 'Rider\'s on the Storm',
    group: 'The Doors',
  },
  {
    name: 'Wish you were here',
    group: 'Pink Floyd',
  },
  {
    name: 'Rambling on',
    group: 'Led Zepplin',
  },
  {
    name: 'Piece of my Heart',
    group: 'Janis Joplin',
  },
  {
    name: 'Sympathy for the Devil',
    group: 'Rolling Stones',
  },
  {
    name: 'Bobby McGee',
    group: 'Janis Joplin',
  },
  {
    name: 'Son of a preacher man',
    group: 'Dusty Springfield',
  }
]

class Queue {

  constructor() {
    this.songs = [];
  }

  isEmpty() {
    return this.songs.length == 0;
  }

  enqueue(song) {
    this.songs.push(song);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'No songs to play';
    }
    else
    {
      this.songs.shift();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'No songs to play'
    }
    else
    {
      return this.songs[0];
    }
  }
}

function randNum(songsIndexed) {

  const newNum =  Math.floor(Math.random() * songs.length);
  if (songsIndexed.includes(newNum)) {

    return randNum(songsIndexed);
  }

  return newNum;
}

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

function animateIn(songDisplayed, string) {


  upNext.innerHTML = string;
}

function setSongList(songDisplayed, string) {

}

function animateOut(songDisplayed, string) {

}

async function playSongs(numSongs) {

  let songsQueue = new Queue();

  if (numSongs > songs.length) {

    alert('¡No tenemos tantas canciones!')
    return 'No tenemos tantas canciones';
  }
  else
  {
    
    let songsIndexed = [];
    let songCount = 0;
    let randIndex = 0;

    /* console.log(i);
    console.log(songs[i]); */

    while (songCount < numSongs) {

      cassetteCircles.forEach(circle => {

        circle.classList.add('active');
      });

      if (songsIndexed.length >= 4) {
        /* console.log('songsIndexed.length is ' + songsIndexed.length);
        console.log('songCount is ' + songCount);
        console.log('second index is ' + songsIndexed.length); */
        let lastFourSongs = songsIndexed.slice(songsIndexed.length - 4, songsIndexed.length);

        /* console.log('last four songs are ' + lastFourSongs); */

        randIndex = randNum(lastFourSongs);
        /* console.log('randIndex from lastFour is ' + randIndex); */
        songsIndexed.push(randIndex);
        /* console.log('songsIndexed after lastFour check is ' + songsIndexed); */
      }
      else if (songsIndexed.length < 4)
      {
        randIndex = randNum(songsIndexed);
        /* console.log('rnad Index from else is ' + randIndex); */

        songsIndexed.push(randIndex);
        /* console.log('songsIndexed is ' + songsIndexed); */
      }

      songsQueue.enqueue(songs[randIndex]);
      songCount++;
    }


    for (var j = 0; j < songsIndexed.length; j++) {

      nowPlaying.classList.remove('out');
      upNext.classList.remove('out');

      await delay(420);
      nowPlaying.innerHTML = songsQueue.peek().name + '<br/> played by ' + songsQueue.peek().group;
      nowPlaying.classList.add('in');
      
      await delay(420);
      songsQueue.dequeue();

      if (j <= numSongs - 2) {
        upNext.innerHTML = songsQueue.peek().name + '<br/> played by ' + songsQueue.peek().group;
        upNext.classList.add('in');
      }
      else if (j === numSongs - 1) {
        upNext.innerHTML = '';
      }

      await delay(1000);
      nowPlaying.classList.remove('in');
      nowPlaying.classList.add('out');

      await delay(420);
      upNext.classList.remove('in');
      upNext.classList.add('out');

      await delay(1000);
      nowPlaying.innerHTML = '';
      upNext.innerHTML = '';

    }
  }

  cassetteCircles.forEach(circle => {

    circle.classList.remove('active');
  });
}



playBtn.addEventListener('click', (e) => {

  const songsToPlay = playSongs(requestInput.value);
  
});