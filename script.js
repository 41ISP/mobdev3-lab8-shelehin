const statsContainer = document.querySelector(".stats")
const trackContainer = document.querySelector(".tracks-list")
async function trackData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()
    for (let i = 0; i < res2.length; i++) {
        const trackItemLi = document.createElement("li")
        trackItemLi.classList.add("trackItem")
        trackItemLi.textContent = res2[i].track.name
        const trackNumberDiv = document.createElement("div")
        trackNumberDiv.classList.add("track-number")
        const trackMainDiv = document.createElement("div")
        trackMainDiv.classList.add("track-main")
        const trackNameDiv
        trackName.appendChild(trackItemLi)
    }
}

trackData()