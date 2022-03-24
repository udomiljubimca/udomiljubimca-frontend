import React from 'react';
import Input from '../../Form/Input/Input';
import FileInput from '../../Form/FileInput/FileInput';
import CreateOrgCover from '../CreateOrgCover/CreateOrgCover';
import CreateOrgGallery from '../CreateOrgGallery/CreateOrgGallery';
import Select from '../../Form/Select/Select';
import Textarea from '../../Form/Textarea/Textarea';
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";


const CreateOrgForm = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm();

    const loginSubmitHandler = async (data) => {
        console.log(data);
    };


    return (
        <form onSubmit={handleSubmit(loginSubmitHandler)} className='create-org-form'>
            <CreateOrgCover register={register} photoNames={{ orgPhoto: 'org-photo', logo: 'logo' }} name={'picture'} />
            <small className='small d-flex justify-content-end'><span className='asterix'>*</span>Obavezna polja</small>
            <Row>
                <Col md={6} sm={12}>
                    <Input type={'text'} label={'Naziv udruženja'} placeholder={'Unesi naziv udruženja'} isRequired={true} register={register} name={'name'} errors={errors} />
                </Col>
                <Col md={6} sm={12}>
                    <Select label={'Mesto (grad)'} defaultValue={'Izaberi grad'} isRequired={true} name={'city'} id={'city'} options={['Nis', 'Beograd', 'Novi Sad']} register={register} />
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <Input type={'email'} label={'Email'} placeholder={'Unesi email adresu'} isRequired={true} register={register} name={'email'} errors={errors} />
                </Col>
                <Col md={6} sm={12}>
                    <Input type={'text'} label={'Broj računa za donaciju'} placeholder={'Unesi broj računa za donaciju'} isRequired={false} id={'account'} register={register} name={'account'} errors={errors} />
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <Input type={'text'} label={'Sajt udruženja'} placeholder={'Unesi sajt udruženja'} isRequired={false} register={register} name={'website'} errors={errors} />
                </Col>
                <Col md={6} sm={12}>
                    <Input type={'text'} label={'Kontakt telefon'} placeholder={'Unesi kontakt telefon'} isRequired={true} register={register} name={'phone'} errors={errors} />
                </Col>
            </Row>
            <Row>
                <FileInput label={'Dodaj uslove za udomljavanje'} isRequired={true} isFullWidth={true} register={register} name={'documents'} errors={errors} />
            </Row>
            <Row>
                <Textarea label={'O udruženju'} placeholder={'Dodaj o udruženju'} isRequired={true} id={'about'} isFullWidth={true} register={register} name={'about'} />
            </Row>
            <CreateOrgGallery register={register} name={'gallery-photo'} control={control} />
            <button type="submit" className="custom-btn btn-primary d-flex justify-content-center" style={{ margin: 'auto' }}>Postavi</button>
        </form>
    );
}

export default CreateOrgForm;
