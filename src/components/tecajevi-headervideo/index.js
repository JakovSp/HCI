import React from "react"
import headervideo from "../../videos/headervideo.webm"

const Video = () => (
    <video       
        src={headervideo}
        title={"header"}
        allow="accelerometer; autoplay; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        type="video/webm"
        autoPlay
        loop
        muted
        width={"100%"}
    />
)
export default Video