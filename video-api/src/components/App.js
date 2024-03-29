import React from 'react'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends React.Component {
    onTermSubmit = (text) => {
        youtube.get('/search', {
            params: {
                q: text
            }
        })
    } 
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail />
            </div>
        )
    }
    
}
    
export default App