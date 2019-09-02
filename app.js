const listMusic = document.querySelector('#listMusic');
const bouton = document.querySelector('#bouton');
bouton.addEventListener('click', (event) => {
    event.preventDefault();
    listMusic.innerHTML = '';
    const userMusic = document.querySelector('#userMusic').value;
    getMusic(userMusic);
});
const getMusic = (music) => {
    const URL = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?q=${music}`;
    fetch(URL)
    .then(response => response.json())
    .then((data) => {
        data.data.forEach((music) => {
            listMusic.insertAdjacentHTML('beforeEnd', `
            <li>
                <img src="${music.album.cover_medium}" />
                <audio controls="controls"> 
                    <source src="${music.preview}" type="audio/mp3" /> 
                </audio> 
            </li>
            `);
        });
    });
};





