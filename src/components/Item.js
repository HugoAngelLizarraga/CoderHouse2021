import React from 'react';

export const Item = ({item}) => {

    return(
        <React.Fragment>
            <div>{item.title} {item.description}</div>
        </React.Fragment>
    )
}