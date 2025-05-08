import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineExclamationCircle, AiOutlineLoading } from 'react-icons/ai';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function Contact() {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [emailCount, setEmailCount] = useState(0);

    useEffect(() => {
        const count = parseInt(sessionStorage.getItem('emailCount') || '0', 10);
        const lastTime = parseInt(sessionStorage.getItem('lastEmailTime') || '0', 10);
        const currentTime = Date.now();

        if (lastTime && (currentTime - lastTime >= 24 * 60 * 60 * 1000)) {
            sessionStorage.setItem('emailCount', '0');
            sessionStorage.setItem('lastEmailTime', currentTime.toString());
            setEmailCount(0);
        } else {
            setEmailCount(count);
        }
    }, []);

    const { values, errors, handleSubmit, handleChange, resetForm, touched } = useFormik({
        initialValues: {
            user_email: '',
            user_phone: '',
            user_message: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit: async () => {
            if (emailCount < 2) {
                setIsSending(true);
                try {
                    if (form.current) {
                        await emailjs.sendForm(
                            import.meta.env.VITE_MAIL_SERVICE_ID,
                            import.meta.env.VITE_MAIL_TEMPLATE_ID,
                            form.current,
                            import.meta.env.VITE_MAIL_PUBLIC_KEY
                        );
                        toast.success('Success! Your message was sent.');
                        resetForm();

                        const newCount = emailCount + 1;
                        setEmailCount(newCount);
                        const currentTime = Date.now();
                        sessionStorage.setItem('emailCount', newCount.toString());
                        sessionStorage.setItem('lastEmailTime', currentTime.toString());
                    }
                } catch (error) {
                    toast.error('Failed to send the message. Please try again.');
                } finally {
                    setIsSending(false);
                }
            } else {
                toast.error('You have reached the maximum number of emails you can send in this session.');
            }
        },
    });

    return (
        <div className='mt-8 text-white flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-3xl'>Get In Touch</h1>
                <p className='text-[#9C9C9C] font-mono w-full max-w-[750px] mt-4 px-2'>
                    Don't hesitate to get in touch! I'd love to discuss new projects, collaborations, or career opportunities. Whether you want to share an idea or work together on a project, you can reach out using the form below.
                </p>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full mt-8 px-4">
                <h3 className="font-bold font-mono">Email</h3>
                <input
                    onChange={handleChange}
                    value={values.user_email}
                    type="email"
                    id="user_email"
                    name='user_email'
                    placeholder="Please enter your email"
                    className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black"
                />
                {errors.user_email && touched.user_email && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.user_email}</p>
                    </div>
                )}
                <h3 className="font-bold font-mono mt-4">Mobile</h3>
                <input
                    onChange={handleChange}
                    value={values.user_phone}
                    id='user_phone'
                    type="text"
                    pattern="[0-9]*"
                    name='user_phone'
                    placeholder="Please enter mobile"
                    maxLength={11}
                    className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black"
                    onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                    }}
                />
                {errors.user_phone && touched.user_phone && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.user_phone}</p>
                    </div>
                )}
                <h3 className="font-bold font-mono mt-4">Message</h3>
                <textarea
                    id='user_message'
                    value={values.user_message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    name="user_message"
                    className="font-mono w-full h-[150px] mt-2 p-2 rounded-md text-black resize-none"
                />
                {errors.user_message && touched.user_message && (
                    <div className="flex items-center justify-center mt-2 p-2 border border-red-500 bg-red-100 rounded-md shadow-md">
                        <AiOutlineExclamationCircle className="text-red-500 mr-2 text-xl" />
                        <p className="text-red-500 font-mono">{errors.user_message}</p>
                    </div>
                )}
                <div className='flex justify-center mt-4 pb-24'>
                    <button
                        type="submit"
                        className='font-mono w-full md:w-full h-[40px] py-2 px-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px] hover:bg-[#4CAF50] transition-colors duration-300 ease-in-out flex justify-center items-center'
                    >
                        {isSending ? <AiOutlineLoading className='animate-spin text-xl' /> : 'Submit >'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
