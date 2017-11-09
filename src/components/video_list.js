import React, { Component } from 'react'
import VideoListItem from './video_list_item'

class VideoList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const videoItems =  this.props.videos.map((video) => {
            return (
                <VideoListItem 
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag} 
                    video={video} />)
        })

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        )
    }
}

export default VideoList