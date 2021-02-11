import React, {useState} from 'react'

import Header from './Header/Header'
import City from './DeliveryPart/City/City'
import Country from './DeliveryPart/Country/Country'
import HouseNumber from './DeliveryPart/HouseNumber/HouseNumber'
import PostalCode from './DeliveryPart/PostalCode/PostalCode'
import Province from './DeliveryPart/Province/Province'
import Street from './DeliveryPart/Street/Street'
import Login from './LogInPart/Login/Login'
import Password from './LogInPart/Password/Password'
import PasswordConfirmation from './LogInPart/PasswordConfirmation/PasswordConfirmation'
import Name from './PersonalPart/Name/Name'
import Surname from './PersonalPart/Surname/Surname'
import Email from './PersonalPart/Email/Email'
import PhoneNumber from './PersonalPart/PhoneNumber/PhoneNumber'
import Buttons from './Buttons/Buttons'

import {checkDataForm} from '../../../../Helpers/Users/Users'

const AddClient = () => {
    const [name, setName] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [surname, setSurname] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [email, setEmail] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [phoneNumber, setPhoneNumber] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [login, setlogin] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [password, setPassword] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [street, setStreet] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [postalCode, setPostalCode] = useState('44 - 119')
    const [houseNumber, setHouseNumber] = useState('1')

    const addUser = (e: any) => {
        const dataToCheck = [
            login.setted,
            password.setted,
            passwordConfirmation.setted,
            name.setted,
            surname.setted,
            phoneNumber.setted,
            email.setted,
            street.setted
        ]

        if(checkDataForm(dataToCheck)){
            const formData = {
                login: login.value,
                password: password.value,
                name: name.value,
                surname: surname.value,
                phone_number: phoneNumber.value,
                email: email.value,
                street: street.value,
                province,
                city,
                house_number: houseNumber,
                postal_code: postalCode,
                country: "Polska"
            }

            fetch("/api/v1/users/addUser", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
        } else
            e.preventDefault()
    }
    
    return (
        <div className="add-client-container">
            <div className="overlay"></div>

            <div className="form-container">
                <form>
                    <Header />

                    <div className="personal-part-container">
                        <Name name={name} setName={setName} />
                        <Surname surname={surname} setSurname={setSurname} />
                        <Email email={email} setEmail={setEmail} />
                        <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                    </div>

                    <div className="log-in-container">
                        <Login login={login} setLogin={setlogin} />
                        <Password password={password} setPassword={setPassword} />
                        <PasswordConfirmation passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} password={password.value} />
                    </div>

                    <div className="delivery-address-container">
                        <Country />
                        <Province setProvince={setProvince} setCity={setCity} />
                        <City setCity={setCity} province={province}/>
                        <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} city={city}/>
                        <Street street={street} setStreet={setStreet} />
                        <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber} />
                    </div>

                    <Buttons addUser={addUser} />
                </form>
            </div>
        </div>
    )
}

export default AddClient