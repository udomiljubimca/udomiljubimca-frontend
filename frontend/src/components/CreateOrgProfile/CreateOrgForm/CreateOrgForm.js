import React from 'react';
import Input from '../../Form/Input/Input';
import FileInput from '../../Form/FileInput/FileInput';
import CreateOrgCover from '../CreateOrgCover/CreateOrgCover';

const CreateOrgForm = () => {
    return (
        <form className='create-org-form'>
            <CreateOrgCover />
            <small className='d-flex justify-content-end'><span className='required'>*</span>Obavezna polja</small>
            <div className='d-flex flex--space-between'>
                <Input type={'text'} label={'Naziv udruženja'} placeholder={'Unesi naziv udruženja'} isRequired={true} id={'name'}></Input>
                <Input type={'text'} label={'Mesto (grad)'} placeholder={'Unesi grad'} isRequired={true} id={'city'}></Input>
            </div>
            <div className='d-flex flex--space-between'>
                <Input type={'email'} label={'Email'} placeholder={'Unesi email adresu'} isRequired={true} id={'email'}></Input>
                <Input type={'text'} label={'Broj računa za donaciju'} placeholder={'Unesi broj računa za donaciju'} isRequired={false} id={'account'}></Input>
            </div>
            <div className='d-flex flex--space-between'>
                <Input type={'email'} label={'Sajt udruženja'} placeholder={'Unesi sajt udruženja'} isRequired={false} id={'website'}></Input>
                <Input type={'text'} label={'Kontakt telefon'} placeholder={'Unesi kontakt telefon'} isRequired={true} id={'phone'}></Input>
            </div>
            <div>
                <FileInput label={'Dodaj uslove za udomljavanje'} isRequired={true} id={'documents'} isFullWidth={true}></FileInput>
            </div>
        </form>
    );
}

export default CreateOrgForm;
