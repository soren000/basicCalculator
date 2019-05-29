import React from 'react';
import { connect } from 'react-redux';

import { startSubmitFeedback } from '../../redux/calcActions';

class FeedbackPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: ""
        }
    }
    onTextChange = (e) => {
        const value = e.target.value;

        this.setState(() => ({ feedback: value }))
    }
    submitFeedback = (e) => {
        e.preventDefault();
        console.log(this.props.feedback)

        this.props.dispatch(startSubmitFeedback(this.state.feedback));   
    }
    render() {
        const { feedback = [] } = this.props;
    
        return (
            <div className="feedbackPageCont">
                <form onSubmit={this.submitFeedback}>
                    <input type="text" name="feedbackBody" onChange={this.onTextChange}></input>
                    <button type="submit">Submit</button>
                </form>
                {
                    feedback.map((item, index) => <p key={index}>{item.text}</p>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.calc
    }
}

export default connect(mapStateToProps)(FeedbackPage);