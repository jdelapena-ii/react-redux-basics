import React from 'react'

class SearchBar extends React.Component {
    state = { text: '' }


    onInputChange = (event) => {
        this.setState({text: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.text)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input 
                            value={this.state.text}
                            type="text"
                            placeholder="Search some videos..."
                            onChange={this.onInputChange}
                        >
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar