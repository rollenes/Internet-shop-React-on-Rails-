import {IFieldForm} from '../../../TypeScript/Interfaces/Interfaces'

export const validateDescription = (value: string, setDescription: (desc: IFieldForm) => void, description: IFieldForm) => {
    const req = /^[A-Z]{1}[a-z]{2,}$/
    const copyDescription = {...description}

    copyDescription.value = value

    if(req.test(value)){
        copyDescription.setted = true
        copyDescription.mistakeInformation = []
    } else{
        copyDescription.setted = false
        copyDescription.mistakeInformation = [
            '* Opis powinien mieć minimum 3 znaki!',
            '* Dozwolone tylko litery, pierwsza powinna być duza!'
        ]
    }

    setDescription(copyDescription)
}

export const checkDataForm = (datasToCheck:Array<boolean>) => {
    let allFieldsSetted = true

    datasToCheck.forEach(data => {
        if(!data)
            allFieldsSetted = false
    })

    if(allFieldsSetted)
        return true
    else
        return false
}

