import React from 'react';
import { connect } from 'react-redux';

import { numberInput, operationInput, clearAll, clearEntry } from '../../redux/calcActions';

class CalculatorNumberButton extends React.Component {
    inputDispatch = () => {
        console.log(this.props.total);
        if (this.props.typeValue === "NUMBER") {
            this.props.dispatch(numberInput({ value: this.props.number }));
        }
        else if (this.props.typeValue === "OPERATION") {
            this.props.dispatch(operationInput({ value: this.props.number }));
        }
        else if (this.props.typeValue === "CLEAR_ALL") {
            this.props.dispatch(clearAll());
        }
        else if (this.props.typeValue === "CLEAR_ENTRY") {
            this.props.dispatch(clearEntry());
        }
    }
    render() {
        return (
            <button
                onClick={this.inputDispatch}
                className={this.props.classes + " calcButton"}
            >
                {this.props.number}
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.calc
    }
}

export default connect(mapStateToProps)(CalculatorNumberButton);