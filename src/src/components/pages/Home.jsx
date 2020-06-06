import React, {Component} from 'react'
import './custom.scss';
import PollForm from "../forms/PollForm";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: null
        }
    }

    submit = values => {
        window.alert (JSON.stringify (values));
    };

    addPoll = () => {
        this.setState({ form:  <PollForm onSubmit={this.submit} />
        });
    }

    render() {
        return (
            <div className="container d-flex justify-content-start">
                <div className="poll-container d-flex flex-column align-items-center justify-content-center">
                        <button type="button" class="btn btn-outline-success" onClick={this.addPoll}>New Poll</button>

                        { this.state.form }
                </div>
            </div>
        );
    }
}

export default Home;
