import React from 'react';
import './App.css';
import {News} from "./components/News"
import {Add} from "./components/Add"




class App extends React.Component {
    state = {
        news: null,
        isLoading: false
    }
    handleAddNews = (data) => {
        const nextNews = [data,...this.state.news]
        this.setState({news:nextNews})

    }
    render() {
        const {news,isLoading} = this.state
        return (
            <div>
                <Add onAddNews = {this.handleAddNews}/>
                {isLoading && <p>Loading...</p>}
                {Array.isArray(news) && <News data = {news}/>}

        </div>
    )
    }
  componentDidMount() {
        this.setState({isLoading:true})
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({isLoading:false, news:data})
            })
    }

}

export default App;
