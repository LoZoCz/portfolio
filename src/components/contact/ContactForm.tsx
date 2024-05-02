import { FC, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../../animations/contentEnterAnim'
import emailjs from '@emailjs/browser'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { successToast, errorToast } from './toasts'

const ContactForm: FC = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)

        if (!form.current) return console.log('Form not found')

        emailjs
            .sendForm(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
                }
            )
            .then(() => {
                console.log('Mail had been sent!')
                successToast()
                form.current && form.current.reset()
                setIsSending(false)
            })
            .catch((err) => {
                console.log('Faild to send a mail: ' + err)
                errorToast()
                setIsSending(false)
            })
    }

    return (
        <form onSubmit={sendEmail} ref={form} className="space-y-6">
            <motion.input
                variants={SlideInAnim}
                type="text"
                name="from_name"
                id="author"
                required
                placeholder="Autor"
                className="block w-full rounded-md border border-zinc-400/50 bg-transparent p-2 outline-none transition-colors duration-300 focus-within:border-zinc-50 focus-within:bg-zinc-800/40 hover:border-zinc-50 hover:bg-zinc-800/40 md:w-2/3"
            />
            <motion.input
                variants={SlideInAnim}
                type="email"
                name="from_mail"
                id="mail"
                required
                placeholder="Mail"
                className="block w-full rounded-md border border-zinc-400/50 bg-transparent p-2 outline-none transition-colors duration-300 focus-within:border-zinc-50 focus-within:bg-zinc-800/40 hover:border-zinc-50 hover:bg-zinc-800/40 md:w-2/3"
            />
            <motion.textarea
                variants={SlideInAnim}
                name="message"
                id="description"
                placeholder="Wiadomość"
                rows={8}
                required
                className="block w-full rounded-md border border-zinc-400/50 bg-transparent p-2 outline-none transition-colors duration-300 focus-within:border-zinc-50 focus-within:bg-zinc-800/40 hover:border-zinc-50 hover:bg-zinc-800/40 md:w-2/3"
            />
            <motion.button
                variants={SlideInAnim}
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 rounded-md border border-zinc-400/50 px-6 py-1 text-lg font-medium text-zinc-50 transition-colors duration-300 hover:border-zinc-50 hover:bg-zinc-50 hover:text-zinc-950 disabled:pointer-events-none disabled:bg-zinc-800/40"
            >
                Wyślij
                {isSending && <Loader />}
            </motion.button>
            <ToastContainer />
        </form>
    )
}

export default ContactForm
