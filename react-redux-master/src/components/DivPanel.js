import React from 'react'
import { useSelector } from 'react-redux';

const DivPanel = () => {
    // Select state from store whose value you want to access
    let counterVal = useSelector(state => state.counter)
    return (
        <div>
            The present value of counter is {counterVal}
        </div>
    );
}

export default DivPanel;