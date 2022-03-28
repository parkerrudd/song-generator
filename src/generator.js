import React from "react";
    
    function Generator() {
        const songList = [
        {songName: 'Gravity', 
        artistName: 'John Mayer', 
        Chill: true, 
        Introspective: true}, 
        {songName: 'Happy and Sad', 
        artistName: 'Kacey Musgraves', 
        Happy: true, 
        Sad: true, 
        Nostalgic: true, 
        Introspective: true}, 
        {songName: 'Circles', 
        artistName: 'Mac Miller', 
        Sad: true, 
        Chill: true, 
        Introspective: true, 
        Nostalgic: true}, 
        {songName: "At Least I'm Pretty", 
        artistName: 'Harriette', 
        Happy: true, 
        Chill: true, 
        Introspective: true}, 
        {songName: 'Summer, Highland Falls', 
        artistName: 'Billy Joel', 
        Energetic: true, 
        Hopeful: true, 
        Introspective: true}, 
        {songName: 'Cowby in LA', 
        artistName: 'LANY', 
        Romantic: true, 
        Chill: true, 
        Happy: true}       
        ]
    
        const songDisplayed = songList.filter(item => item.Happy === true) 
        return songDisplayed; 
    }

export default Generator; 