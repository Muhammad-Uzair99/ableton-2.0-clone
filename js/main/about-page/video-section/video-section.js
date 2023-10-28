import VideoPlayBtnFun from "./video-play-btn/video-play-btn-fn.js"

const videoSectionEls = {
  videoPlayBtnEl: document.querySelector("#video-play-btn"),
  youtubeVideoContainerEl: document.querySelector('#youtube-video-container'),
}

export default function VideoSection() {

  return [
    VideoPlayBtnFun(videoSectionEls),

  ]
}