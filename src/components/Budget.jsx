import React from 'react';
import { connect } from 'react-redux'

function Budget(props) {
    return (
        <div className='Amount'>
            ${props.budget}
        </div>
    );
}

const mapStateToProps = (state) => {
    const budget = state.budget.budget

    return {budget}
}

export default connect(mapStateToProps, null)(Budget);