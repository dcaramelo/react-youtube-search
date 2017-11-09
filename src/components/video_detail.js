import React, { Component } from 'react'

class VideoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = undefined
    }

    componentWillReceiveProps(props) {
        if(props.video) {
            this.setState(props.video)
        }
    }

    render() {
        if (!this.state) {
            return <div>Video loading ...</div>
        }
        const title = this.state.snippet.title
        const description = this.state.snippet.description
        const videoId = this.state.id.videoId
        const videoUrl = `https://youtube.com/embed/${videoId}`

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl}></iframe>
                </div>
                <div className="details">
                    <div className="title">{title}</div>
                    <div className="desc">{description}</div>
                </div>
            </div>
        )
    }
}

export default VideoDetail