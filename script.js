const statsContainer = document.querySelector(".stats")
const trackContainer = document.querySelector(".tracks-list")
async function trackData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()
    let totalDuration = 0
    for (let i = 0; i < res2.length; i++) {
        statsContainer.textContent = `Треков: ${res2.length}`
        totalDuration += res2[i].track.duration_ms
        const trackItem = document.createElement("li")
        trackItem.classList.add("track-item")
        const trackNumber = document.createElement("div")
        trackNumber.classList.add("track-number")
        trackNumber.textContent = i+1
        trackItem.appendChild(trackNumber)
        trackContainer.appendChild(trackItem)
        const trackMain = document.createElement("div")
        trackMain.classList.add("track-main")
        trackMain.textContent = i+1


        
    }
    let totalSeconds = Math.floor(totalDuration / 1000)
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60
    let durationString = `${minutes}:${seconds}`
    statsContainer.textContent = `Общее количество треков: ${res2.length}, общая длительность: ${durationString}`
}

trackData()