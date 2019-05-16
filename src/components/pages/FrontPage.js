import React from 'react';
import { connect } from 'react-redux';

import Calculator from '../subcomponents/Calculator';

const FrontPage = (props) => (
    <div className="frontPageCont">
        <p>
            <span>Basic Calculator made by <a href="https://soren.dev" target="_new">Soren</a></span>
            <a href="https://github.com/soren000/basicCalculator"><span>GitHub</span></a>
        </p>
        <Calculator />
    </div>
)

const mapStateToProps = (state) => {
    return {
        ...state.calc
    }
}

export default connect(mapStateToProps)(FrontPage);