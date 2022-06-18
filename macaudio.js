let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let show_duration = document.querySelector("#show_duration");
let artist = document.querySelector("#artist");

let timer;

let index_no = 0;
let playing_song = false;

//create a audio element
let track = document.createElement('audio');


//all song list
let All_song = [
    {
      name: "Beginning to fall in love",
      path: "Music/begining.mp3",
      singer: "joeboy"
    },
    {
      name: "focus",
      path: "Music/Focus.mp3",
      singer: "joeboy"
    },
    {
      name: "sip(alcohol)",
      path: " Music/sip(alcohol).mp3",
      singer: "joeboy"
  },
  {
    name: "abcdefu",
    path: " Music/abcdefu.mp3",
    singer: "Gayle"
},
{
    name: "Beautiful Ghost",
    path: " Music/Beautiful_Ghosts.mp3",
    singer: "taylor swift"
},
{
    name: "let me down slowly",
    path: " Music/Let_Me_Down_Slowly.mp3",
    singer: "Alec Benjamin"
},
{
    name: "sorry",
    path: " Music/sorry.mp3",
    singer: "hasley"
}
];

//all function


//function load the track
function load_track(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
}
load_track(index_no);


//checking if the song is playing or not
function justplay(){
    if (playing_song == false){
        playsong();
    }else{
        pausesong();
    }
}

//play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<span class="material-symbols-outlined"> pause_circle </span>'
}



//pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<span class="material-symbols-outlined"> play_arrow </span>';
}


//next song
function next_song(){
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

//previous song
function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


//what happens when current song is over
track.addEventListener("ended", next_song)


//duration of the track
track.addEventListener('timeupdate', (event) => {
    var currentTime = Math.floor(track.currentTime);
    const duration = Math.floor(track.duration);

    var sec= new Number();
    var min= new Number();
    sec = Math.floor(currentTime);    
    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;

    show_duration.innerHTML = min + ":"+ sec;
}, false);


//display current day and date
var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

document.getElementById('day').textContent = today;

let day_today = document.getElementById('day');
let date_today = document.getElementById('date');

day_today.innerHTML = dayOfWeek;
date_today.innerHTML = dayOfMonth +" "+ curMonth +" "+ curYear;

//creating the playlist

var length = All_song.length;
for (var i = 0; i < length; i++) {
    document.querySelector('.music_list').innerHTML += '<div onclick="play_selected_song()" class="music_per_index"><p class="song_name">' + All_song[i].name + '</p><h5 class="music_artist">' + All_song[i].singer + '</h5></div>';
};


//The next javascript section is under development



//what happens when you select a song from the playlist

    function play_selected_song(){
        console.log(document.querySelector('.song_name').textContent);
       // console.log();
        };
