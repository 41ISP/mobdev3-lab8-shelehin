const statsContainer = document.querySelector(".stats")
const trackContainer = document.querySelector(".tracks-list")
async function trackData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()
    let totalDuration = 0
    for (let i = 0; i < res2.length; i++) {
        // statsContainer.textContent = `Треков: ${res2.length}`
        totalDuration += res2[i].track.duration_ms
        const trackItem = document.createElement("li")
        trackItem.classList.add("track-item")
        const trackNumber = document.createElement("div")
        trackNumber.classList.add("track-number")
        trackNumber.textContent = i + 1
        trackItem.appendChild(trackNumber)
        trackContainer.appendChild(trackItem)
        const trackMain = document.createElement("div")
        trackMain.classList.add("trackMain")
        trackItem.appendChild(trackMain)
        const albumArt = document.createElement("img")
        albumArt.classList.add("album-art")
        trackMain.appendChild(albumArt)
        albumArt.src = res2[i].track.album.images[0].url
        const trackInfo = document.createElement("div")
        trackInfo.classList.add("track-info")
        const trackName = document.createElement("div")
        trackName.classList.add("track-name")
        trackInfo.appendChild(trackName)
        trackName.textContent = res2[i].track.name
        trackMain.appendChild(trackName)
        const trackArtists = document.createElement("div")
        trackArtists.classList.add("track-artists")
        trackArtists.textContent = res2[i].track.album.artists.map((art) => art.name).join(", ")
        trackMain.appendChild(trackArtists)
        const trackAlbum = document.createElement("div")
        trackAlbum.classList.add("track-album")
        trackAlbum.textContent = res2[i].track.album.name
        trackMain.appendChild(trackAlbum)
        const trackMeta = document.createElement("div")
        trackMeta.classList.add("track-meta")
        const duration = document.createElement("div")
        duration.classList.add("duration")
        let totalSeconds = Math.floor(totalDuration / 1000)
        let minutes = Math.floor(totalSeconds / 60 % 60)
        let seconds = Math.floor(totalSeconds % 60)
        duration.textContent = `${minutes}:${seconds}`
        trackItem.appendChild(duration)
        const popularity = document.createElement("div")
        popularity.classList.add("popularity")
        popularity.textContent = res2[i].track.popularity
        trackItem.appendChild(popularity)
    }
    const totalTracks = document.createElement("div")
    totalTracks.classList.add("total-tracks")
    statsContainer.appendChild(totalTracks)
    totalTracks.textContent = `Общее количество треков: ${res2.length}`
    let totalSeconds = Math.floor(totalDuration / 1000)
    let minutes = Math.floor(totalSeconds / 60 % 60)
    let hours = Math.floor(totalSeconds / 3600 % 60)
    let durationString = `${hours}ч : ${minutes}м`
    const totalDurationi = document.createElement("div")
    totalDurationi.classList.add("total-duration")
    totalDurationi.textContent = `общая длительность: ${durationString}`
    statsContainer.appendChild(totalDurationi)

}

trackData()