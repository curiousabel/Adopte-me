import React from 'react';
import { render } from "react-dom";

import SearchParams from './SearchParams';

const Details = props => {
    return <pre> <code>
        {JSON.stringify(props,null,4)}
    </code> </pre>
}

export default Details;