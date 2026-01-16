import * as yup from 'yup';
import i18n from '../i18n/config';

export const registerFormSchemas = yup.object().shape({
    email: yup.string()
        .email(() => i18n.t('validation.emailInvalid'))
        .required(() => i18n.t('validation.emailRequired')),
    phone: yup.number()
        .integer(() => i18n.t('validation.phoneInteger'))
        .required(() => i18n.t('validation.phoneRequired')),
    message: yup.string()
        .required(() => i18n.t('validation.messageRequired')),

});
