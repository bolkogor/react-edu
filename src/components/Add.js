import React from 'react'

class Add extends React.Component {
    state = {
        name: "",
        text: "",
        disabled: true,
        agree: false,
        bigText: ""
    }
    validate = (e) => {
        const {name,text,agree} = this.state

        if (name.trim()&& text.trim() && agree){

            return false}
        else
            return true
    }

    agreeHandle = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }
    clickHandle = (e) => {
        e.preventDefault()
        const {name,text,bigText} = this.state
        this.props.onAddNews({author:name,id:+new Date(),text,bigText})
    }
    changeHandle = (e) => {
        const {id,value} = e.currentTarget
        this.setState({
            [id]: value,

        })
    }
    render() {
        return(
            <form className="add">

            <input id="name" defaultValue="" placeholder="Enter name" onChange={this.changeHandle} ref={this.input} type="text"/>
            <textarea id="text" defaultValue="" placeholder="Enter Text" onChange={this.changeHandle} type="text"></textarea>
            <textarea id="bigText" defaultValue="" placeholder="Enter More text" onChange={this.changeHandle} type="text"></textarea>
            <label>
            <input onClick={this.agreeHandle} type="checkbox" value={this.state.text}/> I agree with Terms and Conditions
        </label>
        <button className="add-button" onClick={this.clickHandle} disabled={this.validate(this)}>Add post</button>
        </form>
    )
    }
}
export {Add};