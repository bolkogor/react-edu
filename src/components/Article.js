import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
    state = {
        visible:false
    }
    moreHandler = (e) => {
        e.preventDefault()
        this.setState({visible:!this.state.visible})
    }
    render() {
        const {author,text,bigText} = this.props.data
        const {visible} = this.state
        return(
            <div className="news-article">
            <p>Author: {author}</p>
        <p>Text {text}</p>
        {
            !visible && <a onClick={this.moreHandler} href="#" className="spoiler">more</a>}
            { visible && <p>{bigText}</p>
            }
            {visible && <a onClick={this.moreHandler} href="#" className="spoiler">less</a>}


                </div>
            )
    }
}
Article.propTypes = {
    data: PropTypes.shape ({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}



export {Article}