import React from 'react';
import { connect } from 'react-redux';

class Output extends React.Component {
    render() {
        return (
            <div className="output">
                <p className="fullOutput">
                    {this.props.lastResult || ""}
                </p>
                <p className="answerOutput">
                    {this.props.currentEntry.join('') || this.props.lastResult || ""}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.calc
    }
}

export default connect(mapStateToProps)(Output);