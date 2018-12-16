import React from 'react'
const Square = (props) => {
    console.log(props);
    const {msg} = props;
    return (
        <div>
            {msg}
        </div>
    )
}

export default Square;