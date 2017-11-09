import React, { Component } from 'react'

class VideoListItem extends Component {
    constructor(props) {
        super(props)
        this.video = props.video
        this.key = props.key
        this.onVideoSelect = props.onVideoSelect
    }

    render() {
        const imgUrl = this.video.snippet.thumbnails.default.url
        const title = this.video.snippet.title

        return (
            <li onClick={() => this.onVideoSelect(this.video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading" >
                            {title}
                        </div>
                    </div>
                </div>
                
            </li>  
        )
    }
}

export default VideoListItem