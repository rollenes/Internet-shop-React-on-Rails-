import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return(
        <Link to="/admin/">
            <button>Anuluj</button>
        </Link>
    )
}

export default CancelButton
