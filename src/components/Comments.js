import React from 'react'
import newsData from "../data/newsData.json"
class Comments extends React.Component {
    render() {
        return(
            <p>{newsData.length>0 ? "no comments" : "no news - no comments"}</p>
    )
    }
}

export {Comments};