import React from 'react';
import { connect } from 'react-redux';

import Calculator from '../subcomponents/Calculator';

const FrontPage = (props) => (
    <div className="frontPageCont">
        <p>
            <span>Basic Calculator</span>
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