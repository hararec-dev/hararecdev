import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [state, handleSubmit] = useForm("xzzrwqej");

    useEffect(() => {
        setIsFormValid(email.trim() !== '' && message.trim() !== '');
    }, [email, message]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailTouched(true);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setMessageTouched(true);
    };

    return state.succeeded
        ? (
            <motion.div
                className="text-center py-5 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
            >
                <p className="font-work text-background-light">¡Gracias, nos pondremos en contacto contigo!</p>
            </motion.div>
        )
        : (
            <motion.form
                className="text-center p-5 w-full sm:px-0 flex flex-col justify-center font-work"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                onSubmit={handleSubmit}
            >
                <div className='mx-3 mb-2'>
                    <motion.input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu Email *"
                        className={`w-full rounded-full py-2 pl-5 bg-transparent border ${emailTouched && !email.trim() ? 'border-red-500' : 'border-foreground-light dark:bg-background-dark'} text-foreground-light`}
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => setEmailTouched(true)}
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    />
                    {emailTouched && !email.trim() && (
                        <p className="text-red-500 text-sm mt-1 text-left pl-5">El email es obligatorio</p>
                    )}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>
                <div className="mx-3 mb-2">
                    <motion.textarea
                        id="message"
                        name="message"
                        placeholder="Tu mensaje... *"
                        className={`w-full rounded-full py-2 px-5 bg-transparent border ${messageTouched && !message.trim() ? 'border-red-500' : 'border-foreground-light dark:bg-background-dark'} text-foreground-light resize-none`}
                        style={{ minHeight: '42px', maxHeight: '80px' }}
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={() => setMessageTouched(true)}
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    />
                    {messageTouched && !message.trim() && (
                        <p className="text-red-500 text-sm mt-1 text-left pl-5">El mensaje es obligatorio</p>
                    )}
                    <ValidationError
                        prefix="Mensaje"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>
                <div className='mx-3 mb-2'>
                    <motion.button
                        type="submit"
                        disabled={state.submitting || !isFormValid}
                        className="w-full font-poppins font-medium px-5 py-2 rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 dark:from-sky-600 dark:via-sky-700 dark:to-sky-800 hover:from-sky-500 hover:to-sky-700 dark:hover:from-sky-600 dark:hover:to-sky-900 dark:shadow-sky-700 transition-all duration-300 ease-in-out hover:scale-105 text-gray-900 dark:text-gray-50 border border-sky-500 dark:border-sky-800 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: isFormValid ? 1.05 : 1 }}
                        whileTap={{ scale: isFormValid ? 0.95 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {state.submitting ? 'Enviando...' : '¡Ponte en contacto!'}
                    </motion.button>
                </div>
            </motion.form>
        );
};
