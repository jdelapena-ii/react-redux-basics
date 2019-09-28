import React from 'react'

class VideoDetail extends React.Component {
    state = {
        video: 'video item'
    }

    render() {
        return(
            <div>
                <h1>Video Details!</h1>
                <h3>{this.state.video}</h3>
            </div>
        )
    }
}

export default VideoDetail   