import React, {FC} from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../../../../assets/Fontello/fontello-2faec39f/css/fontello.css'

interface Props {userID: number}

const EditUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/Users/editUser/${userID}`}>
            <div>
                <button className="table__td__edit-button">
                    Edytuj
                    <i className=" icon-user"></i>
                </button>
            </div> 
        </Link>
    )
}

export default EditUserButton
