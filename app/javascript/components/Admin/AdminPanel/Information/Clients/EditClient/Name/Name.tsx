import React, {FC} from 'react'

import {validateName} from '../../../../../../../Helpers/Users/Users'

interface Props {
    name: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setName: any
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div>
            <input type="text" placeholder="Imie" value={name.value} onChange={(e) => validateName(e.target.value, setName, name)}/>

            <div className="mistake-info-container">
                {name.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Name
