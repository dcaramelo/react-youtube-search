import _ from 'lodash'
import React, { Component } from 'react'
import ReactDom    from 'react-dom'
import YTSearch    from 'youtube-api-search'
import SearchBar   from './components/search_bar'
import VideoList   from './components/video_list'
import VideoDetail from './components/video_detail'
const  API_KEY = 'AIzaSyAq8HPrbemKw4a23McQJD9ksl2w2lGAcII'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {videos: [], selectedVideo: null}
        this.onSearchTermChange('super nintendo')
    }

    onSearchTermChange(term) {
        YTSearch({key: API_KEY, term: term}, videos => this.setState({videos: videos, selectedVideo: videos[0]}))
    }

    render() {
        const searchVideo = _.debounce((term) =>this.onSearchTermChange(term), 300)
        return (
            <div>
                <SearchBar onSearchTermChange={searchVideo}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'))
