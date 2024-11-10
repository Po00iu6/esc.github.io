document.getElementById("dd").volume=0.1;


document.addEventListener('DOMContentLoaded', (event) => {
    // Music playlist URLs
    const playlist = [
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/希望有羽毛和翅膀.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/经过.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/使一颗心免于哀伤.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/若我不曾见过太阳.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/在银河中孤独摇摆.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/MoonHalo.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/pinKing.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/不眠之夜.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/我不曾忘记.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/三千娑世御咏歌.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/烬火.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/绮縠纷披.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/让风告诉你.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/遨欢同游.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/你呀你呀.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/如果突然想起我.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/别让我担心.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/门的另一端.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/璃云月海.mp3'
        // Add more URLs as needed
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Starting index, can be set to any valid index in the playlist
    let currentIndex = getRandomInt(0, playlist.length);
    let startIndex = currentIndex; // You can set a different start index if needed

    // Get the audio element
    const audio = document.getElementById('dd');

    // Function to play the song at the given index
    function playSongAtIndex(index) {
        audio.src = playlist[index];
        audio.play();
    }

    // Initialize the playlist from the specified start index
    playSongAtIndex(currentIndex);

    // Event listener for when the current song ends
    audio.addEventListener('ended', () => {
        // Increment the current index
        currentIndex++;
        // If the index is out of bounds, reset to the start index
        currentIndex%=(playlist.length);
        // Play the song at the new index
        playSongAtIndex(currentIndex);
    });

    // Optionally, you can set a different start index here after page load
    // startIndex = 1; // For example, start from the second song
    // currentIndex = startIndex; // Update the current index to match the new start index
    // playSongAtIndex(currentIndex); // Re-initialize playback if you change the start index
});