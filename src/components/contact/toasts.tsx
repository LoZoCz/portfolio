import { Slide, toast } from 'react-toastify'
import FormToast from './FormToast'

export const successToast = () => {
    return toast(
        <FormToast label="Wiadomość została wysłana" type="success" />,
        {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
            theme: 'colored',
        }
    )
}

export const errorToast = () => {
    return toast(
        <FormToast label="Wiadomość została wysłana" type="success" />,
        {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
            theme: 'colored',
        }
    )
}
