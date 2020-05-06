import React, {Component} from "react";

class CreatePoll extends Component {
    constructor() {
        super();

        this.state = {
            poll_name: "",
            question: "",
            option: ""
        };
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: event.target.value });
    }

    render() {
        return (
            <div>
                <form>
                    <h2>New Poll</h2>
                    <input type="text" class ="poll_box" placeholder="Enter a poll name" name='poll_name' value={this.state.poll_name} onChange={this.handleChange}/>
                    <br/>
                    <input type="text" className="poll_box" placeholder="Enter a question" name='question' value={this.state.question} onChange={this.handleChange}/>

                    <br/>
                    <input type="text" className="poll_box" placeholder="Add option" name='option' value={this.state.option} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default CreatePoll;
