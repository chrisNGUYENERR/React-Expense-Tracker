import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Budget(props) {

    const { budget } = props
    const fontColor = () => {
        if (budget > 0)
        return true;
    }

    useEffect(() => {
        document.title = `Budget: ${budget}`
    });

    return (
        <div style={{color: fontColor() ? '#FFFFFF' : '#FF0000'}}>
            ${budget}
        </div>
    );
}

const mapStateToProps = (state) => {
    const budget = state.budget.budget

    return {budget}
}

export default connect(mapStateToProps, null)(Budget);