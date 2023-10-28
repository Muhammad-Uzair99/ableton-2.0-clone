export default function VideoPlayBtnFun({
  videoPlayBtnEl,
  youtubeVideoContainerEl
}) {

    videoPlayBtnEl.addEventListener("click", () => {
      videoPlayBtnEl.classList.add("hidden");
      youtubeVideoContainerEl.classList.remove("hidden");

      youtubeVideoContainerEl.innerHTML = `
      <iframe class="w-full h-full" src="https://www.youtube.com/embed/9SbnhgjeyXA?autoplay=1" title="Why Ableton - Juanpe Bolivar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `
    })

}