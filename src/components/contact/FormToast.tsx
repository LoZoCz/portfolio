import { FC } from 'react'
import { MailCheck, MailWarning } from 'lucide-react'

interface Props {
    label: string
    type: 'error' | 'success'
}

const FormToast: FC<Props> = ({ label, type }) => {
    const icons = {
        success: <MailCheck className="size-6 text-zinc-50" />,
        error: <MailWarning className="size-6 text-zinc-50" />,
    }

    return (
        <div className="flex items-center gap-4 rounded-md">
            {icons[type]}
            {label}
        </div>
    )
}

export default FormToast
