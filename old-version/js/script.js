var start_button = document.getElementById("iniciar_button");
var is_playing = false;
var list_mp3 = [];
var mp3_currently;
var index_mp3 = -1;

start_button.addEventListener("click", function() {
    if(is_playing) {
        pause_song();
    }
    else {
        play_song();
    }
    console.log(is_playing);
});

function capturar_archivo(evt) {
    let files = evt.target.files;

    add_song_to_album(files[0]);
    add_song_to_list(files[0])
}

var file_chooser = document.getElementById("selector_mp3");
file_chooser.addEventListener("change", capturar_archivo);

var volume_range = document.getElementById("volumen_range");
set_volume_label(get_volume_range()); //Get and set the volume percent in the label.

// I used input instead of change for to get every change as we drag the range.
volume_range.addEventListener("input", function() {
    if(mp3_currently)
        set_volume(volume_range.value)
    set_volume_label(volume_range.value);
})

function get_volume_range() {
    let volume = 0;
    if(volume_range)
        volume = volume_range.value;
    return volume
}

function set_volume(value) {
    if(mp3_currently)
        mp3_currently.volume = value / 100; //Volume is between  and 1.
}

function set_volume_label(value) {
    document.getElementById("volumen_label").textContent = value + "%";
}

function add_song_to_list(song_file) {
    list_mp3.push(song_file);
}

function add_song_to_album(song_file) {
    let div_song = document.createElement('div');
    div_song.id = `song_${list_mp3.length}`;
    div_song.className = "album__cancion album__cancion--unselected";
    div_song.innerHTML = `<img src="img/cover.png" alt=""><h4>${song_file.name}</h4>`;
    div_song.addEventListener("click", handle_selection);

    let album = document.querySelector(".album");
    album.appendChild(div_song);
}

function handle_selection(evt) {
    style_selected_song(evt.currentTarget);
    pause_song();

    // I used currentTarget to get div's id. With target I got empty strings by img and h4.
    console.log("Selected: " + evt.currentTarget.id);
    let index = evt.currentTarget.id;
    index = parseInt(index.split("_")[1]);
    index_mp3 = index; //Set the list index for mp3 that will play.

    load_song(list_mp3[index]);
}

function load_song(song) {
    pause_song();

    if(mp3_currently == undefined)
        mp3_currently = new Audio(URL.createObjectURL(song));
    else
        mp3_currently.src = URL.createObjectURL(song);
}

function style_selected_song(song_div) {
    let album = document.getElementsByClassName("album__cancion");

    for (index = 0; index < album.length; index++) {
        album[index].className = "album__cancion  album__cancion--unselected";
    }
    song_div.className = "album__cancion album__cancion--selected";
}

function play_song() {
    document.getElementById("iniciar_img").src = "img/pause.png";

    if(mp3_currently) {
        set_volume(get_volume_range())
        mp3_currently.play();
    }
    is_playing = true;
}

function pause_song() {
    document.getElementById("iniciar_img").src = "img/start.png";
    
    if(mp3_currently) {
        mp3_currently.pause();
    }
    is_playing = false;
}

document.getElementById("siguiente_button").addEventListener("click", handle_next_song);

function handle_next_song() {
    if(list_mp3.length > 0) {
        index_mp3 += 1;

        if(index_mp3 >= list_mp3.length)
            index_mp3 = 0;

        style_selected_song(get_div_song(index_mp3));
        load_song(list_mp3[index_mp3]);
    }
}

document.getElementById("anterior_button").addEventListener("click", handle_previous_song);

function handle_previous_song() {
    if(list_mp3.length > 0) {
        index_mp3 -= 1;

        if(index_mp3 < 0)
            index_mp3 = list_mp3.length - 1;
        
        style_selected_song(get_div_song(index_mp3));
        load_song(list_mp3[index_mp3]);
    }
}

function get_div_song(index) {
    return document.getElementById("song_" + index);
}