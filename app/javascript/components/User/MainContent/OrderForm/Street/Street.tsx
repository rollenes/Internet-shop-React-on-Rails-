import React, {FC} from 'react'

import {IFieldFormUnmutable} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateStreet} from '../../../../../Helpers/Orders/Orders'

interface Props {
    street: IFieldFormUnmutable,
    setStreet: (street: IFieldFormUnmutable) => void
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div className="data-container">
            <input type="text"
                value={street.value}
                disabled={street.unmutable}
                placeholder="Ulica"
                id='street-input'
                className='data-container__value-input'
                onChange={(e) => validateStreet(e.target.value, setStreet, street)}
            />

            <div className="mistake-info-container">
                {street.mistakeInformation.map((info: string) => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Street
