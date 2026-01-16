import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AiOutlineExclamationCircle, AiOutlineLoading } from 'react-icons/ai';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function Contact() {
    const [isSending, setIsSending] = useState(false);
    const { t } = useTranslation();

    const { values, errors, handleSubmit, handleChange, resetForm, touched } = useFormik({
        initialValues: {
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit: async (formValues) => {
            setIsSending(true);
            try {
                const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formValues.email,
                        phone: formValues.phone,
                        message: formValues.message,
                    }),
                });

                if (response.ok) {
                    toast.success(t('contact.form.success'));
                    resetForm();
                } else {
                    toast.error(t('contact.form.error'));
                }
            } catch (error) {
                toast.error(t('contact.form.error'));
            } finally {
                setIsSending(false);
            }
        },
    });

    return (
        <div id='contact' className='mt-8 text-white flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-3xl'>{t('contact.title')}</h1>
                <p className='text-[#9C9C9C] font-mono w-full max-w-[750px] mt-4 px-2'>
                    {t('contact.description')}
                </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full mt-8 px-4">
                <h3 className="font-bold font-mono">{t('contact.form.email')}</h3>
                <input
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    id="email"
                    name='email'
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black"
                />
                {errors.email && touched.email && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.email}</p>
                    </div>
                )}
                <h3 className="font-bold font-mono mt-4">{t('contact.form.mobile')}</h3>
                <input
                    onChange={handleChange}
                    value={values.phone}
                    id='phone'
                    type="text"
                    pattern="[0-9]*"
                    name='phone'
                    placeholder={t('contact.form.mobilePlaceholder')}
                    maxLength={11}
                    className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black"
                    onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                    }}
                />
                {errors.phone && touched.phone && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.phone}</p>
                    </div>
                )}
                <h3 className="font-bold font-mono mt-4">{t('contact.form.message')}</h3>
                <textarea
                    id='message'
                    value={values.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    name="message"
                    className="font-mono w-full h-[150px] mt-2 p-2 rounded-md text-black resize-none"
                />
                {errors.message && touched.message && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.message}</p>
                    </div>
                )}
                <div className='flex justify-center mt-4 pb-8'>
                    <button
                        type="submit"
                        className='font-mono w-full md:w-full h-[40px] py-2 px-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px] hover:bg-[#4CAF50] transition-colors duration-300 ease-in-out flex justify-center items-center'
                    >
                        {isSending ? <AiOutlineLoading className='animate-spin text-xl' /> : t('contact.form.submit')}
                    </button>
                </div>
            </form>
            
            <div className='flex flex-col items-center mt-12 pb-36 px-4'>
                <div className='w-full max-w-[600px] border-t-2 border-[#62BA1B] pt-8'>
                    <h3 className='font-bold text-2xl md:text-3xl mb-8 text-center text-white'>{t('contact.direct.title')}</h3>
                    <div className='flex flex-col gap-5 font-mono'>
                        <a 
                            href="mailto:ugurkolcaknew@gmail.com" 
                            className='text-lg md:text-xl hover:text-[#62BA1B] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-white/10'
                        >
                            <span className='font-bold text-white'>📧 {t('contact.direct.email')}</span> 
                            <span className='text-[#9C9C9C]'>ugurkolcaknew@gmail.com</span>
                        </a>
                        <a 
                            href="tel:+905062515792" 
                            className='text-lg md:text-xl hover:text-[#62BA1B] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-white/10'
                        >
                            <span className='font-bold text-white'>📱 {t('contact.direct.phone')}</span> 
                            <span className='text-[#9C9C9C]'>+90-506-251-57-92</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
