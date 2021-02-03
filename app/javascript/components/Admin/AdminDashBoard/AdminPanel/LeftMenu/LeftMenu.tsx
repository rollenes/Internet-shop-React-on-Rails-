import React, {FC} from 'react'

import {Route} from 'react-router-dom'

import LeftMenuOption from './LeftMenuOption/LeftMenuOption'
import AdminPresentation from './AdminPresentation/AdminPresentation'
import EditAdmin from './EditAdmin/EditAdmin'

interface Props{
    informationParts: {
        ordersDiagram: any,
        ordersList: any,
        productsList: any,
        clientsList: any,
        statisticDiagrams: any,
        complaintsList: any,
        opinionsList: any
    }
}

const LeftMenu:FC<Props> = ({informationParts}) => {
    
    const moveToElement = (element:any) => {
        if(element)
            element.current.scrollIntoView({ behavior: 'smooth'})
    }
    
    return (
        <div className="left-menu-container">

            <Route path="/admin/" exact>
                <AdminPresentation />

                <div className="menu-options-container">
                    <ul>
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.ordersDiagram} value="Zamówienia" />
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.productsList} value="Produkty" />
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.clientsList} value="Klienci" />
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.statisticDiagrams} value="Statystyki" />
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.complaintsList} value="Reklamacja" />
                        <LeftMenuOption moveToElement={moveToElement} element={informationParts.opinionsList} value="Opinie" />
                    </ul>
                </div>
            </Route>

            <Route path="/admin/editAdmin" exact>
                <EditAdmin />
            </Route>
        </div>
    )
}

export default LeftMenu