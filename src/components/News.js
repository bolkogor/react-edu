import React from 'react'
import PropTypes from 'prop-types'
import {Article} from "./Article"


class News extends React.Component {
    state = {
        clicks:0
    }

    renderNews = () => {
        const {data} = this.props
        let newsTemplate
        if (data.length) {
            newsTemplate = this.props.data.map(function (item) {
                    return <Article key = {item.id} data={item}/>
                }
            )
        } else {
            newsTemplate = <p>No News</p>
        }

        return (
            <div>
            {newsTemplate}
            </div>
    )
    }

    render() {
        const {data} = this.props
        return (
            <div className="news">
            {this.renderNews()}
            <p className={data.length>0 ? "news-count" : "none"}>Total news: {data.length}</p>

        </div>
    )

    }

}
News.propTypes = {
    data: PropTypes.array.isRequired}

    export {News}