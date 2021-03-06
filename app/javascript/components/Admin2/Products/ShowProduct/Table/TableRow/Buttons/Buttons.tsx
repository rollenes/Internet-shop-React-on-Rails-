import React, {FC} from 'react'

import EditProductButton from '../Buttons/EditProductButton/EditProductButton'
import RemoveProductButton from '../Buttons/RemoveProductButton/RemoveProductButton'

interface Props{id: number}

const Buttons:FC<Props> = ({id}) => {
    return (
        <td className="table__td">
            <EditProductButton productID = {id} />
            <RemoveProductButton productID={id} />
        </td>
    )
}

export default Buttons
