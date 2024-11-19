import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import { errorAlert, successAlert } from './alerts';


export const sendEmail = (formRef: RefObject<HTMLFormElement>, service: string, template: string, pk: string): void => {
    if (formRef.current) {
        emailjs.sendForm(service, template, formRef.current, pk)
            .then(
                () => {
                    console.log('¡ÉXITO!');
                    successAlert('Email enviado exitosamente')
                },
                (error) => {
                    console.log('FALLÓ...', error.text);
                    errorAlert("No se pudo enviar email")
                }
            );
    }
};