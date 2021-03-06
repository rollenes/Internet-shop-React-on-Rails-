import React, {useEffect, useState} from 'react'

import {checkDataForm} from '../../../../Helpers/Products/ProductsHelper'

import {IProduct} from '../../../../../TypeScript/Interfaces/Interfaces'

import '../../../../../assets/stylesheets/Admin2/Products/EditProduct/EditProduct.scss'

import Header from './Header/Header'
import ProductType from './ProductType/ProductType'
import ProductQuantityAvailable from './ProductQuantityAvailable/ProductQuantityAvailable'
import ProductPrice from './ProductPrice/ProductPrice'
import ProductPicture from './ProductPicture/ProductPicture'
import ProductDescription from './ProductDescription/ProductDescription'
import OptionsButton from './OptionsButton/OptionsButton'

import actions from '../../../../../redux/products/duck/actions'
import {useDispatch}  from 'react-redux'

import {useParams, useHistory} from 'react-router-dom'

const EditProduct = () => {
    const {productID} = useParams()
    const dispatch = useDispatch()

    const [source, setSource] = useState({
        value: '',
        setted: true
    })
    const [description, setDescription] = useState({
        value: '',
        setted: true,
        mistakeInformation: ['']
    })
    const [type, setType] = useState('dairy')
    const [price, setPrice] = useState(1)
    const [quantityAvailable, setQuantityAvailable] = useState(1)
    
    const history = useHistory()

    const editProduct = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const dataToCheck = [
            description.setted
        ]

        if(checkDataForm(dataToCheck)){
            const formData = {
                source: source.value,
                description: description.value,
                price,
                quantity_available: quantityAvailable,
                product_type: type,
            }

            fetch(`/api/v1/products/${productID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData: formData,
                })
            })
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((products: Array<IProduct>) => dispatch(actions.setProduct(products, 'all')))
            .then(() => history.push('/admin/Products'))
        }   
    }

    useEffect(() => {
        fetch(`/api/v1/products/${productID}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((product: IProduct) => {
            setSource({value: product.source, setted: true})
            setDescription({value: product.description, setted: true, mistakeInformation: []})
            setPrice(product.price)
            setQuantityAvailable(product.quantity_available)
            setType(product.product_type)
        })
    },[])

    return (
        <div className="edit-product-container">
            <div className="overlay">
                                    
            </div>

            <div className="edit-user-form">
                <form>
                    <Header />
                    <ProductPicture setSource={setSource} source={source}/>
                    <ProductDescription description={description} setDescription={setDescription} />
                    <ProductPrice price={price} setPrice={setPrice} />
                    <ProductQuantityAvailable quantityAvailable={quantityAvailable} setQuantityAvailable={setQuantityAvailable} />
                    <ProductType type={type} setType={setType}/>
                    <OptionsButton editProduct={editProduct} />
                </form>
            </div> 
        </div> 
    )
}

export default EditProduct
