import React from 'react';
import { connect } from 'react-redux';

import CalculatorNumberButton from './CalculatorNumberButton';
import Output from './Output';

class Calculator extends React.Component {
    // addNumber = (e) => {
    //     console.log(e.target.value);
    //     console.log(this.props);
    // }
    render() {
        return (
            <div className="calculator">
                {this.props.error && <p>{this.props.error}</p>}
                <Output />
                <div>
                    <CalculatorNumberButton number={"("} typeValue="NUMBER" />
                    <CalculatorNumberButton number={")"} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"CA"} typeValue="CLEAR_ALL" />
                    <CalculatorNumberButton number={"CE"} typeValue="CLEAR_ENTRY" />
                </div>
                <div>
                    <CalculatorNumberButton number={7} typeValue="NUMBER" />
                    <CalculatorNumberButton number={8} typeValue="NUMBER" />
                    <CalculatorNumberButton number={9} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"/"} typeValue="OPERATION" />
                </div>
                <div>
                    <CalculatorNumberButton number={4} typeValue="NUMBER" />
                    <CalculatorNumberButton number={5} typeValue="NUMBER" />
                    <CalculatorNumberButton number={6} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"*"} typeValue="OPERATION" />
                </div>
                <div>
                    <CalculatorNumberButton number={1} typeValue="NUMBER" />
                    <CalculatorNumberButton number={2} typeValue="NUMBER" />
                    <CalculatorNumberButton number={3} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"-"} typeValue="OPERATION" />
                </div>
                <div>
                    <CalculatorNumberButton number={"0"} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"."} typeValue="NUMBER" />
                    <CalculatorNumberButton number={"+"} typeValue="OPERATION" />
                    <CalculatorNumberButton number={"Ans"} classes={"answerButton"} typeValue="OPERATION" />
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.calc
    }
}

export default connect(mapStateToProps)(Calculator);