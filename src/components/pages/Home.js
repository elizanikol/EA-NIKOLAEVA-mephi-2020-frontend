import React, {Component} from 'react';
import '../create_poll/CreatePoll.css';
import CreatePoll from '../create_poll/CreatePoll'
import "./Page.css"


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: null,
            option: null
        }
    }

    addPoll = () => {
        this.setState({ form: <CreatePoll/>});
    }

    render() {
        return (
            <body id="CreateForm">
            <div className="parent-container">
                <div className="add-container">
                    <button className='new' onClick={this.addPoll}></button>
                </div>

                <div className="poll-container">
                    { this.state.form }
                </div>
            </div>
            </body>

        );
    }
}

export default Home;
