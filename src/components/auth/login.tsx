import { LoginPhone } from './LoginPhone'
import { LoignPassword } from './password'
import { useEffect, useRef, useState } from 'react'

const tabKeys = ['password', 'phone'] as const

interface LoginProps {
    open?: boolean
    onClose?: () => void
}

const handleEsce = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
    }
}

export const Login: React.FC<LoginProps> = ({ open, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null!)
    const [tabKey, setTabKey] = useState<string>(tabKeys[0])
    useEffect(() => {
        if (open) {
            showDialogModal()
        } else if (open === false) {
            hideDialogModal()
        }
        window.addEventListener('keydown', handleEsce)
        return () => {
            window.removeEventListener('keydown', handleEsce)
        }
    }, [open])

    const showDialogModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }

    const handleCloseModal = () => {
        onClose && onClose()
    }

    const hideDialogModal = () => {
        if (open === false) {
            if (dialogRef.current) {
                dialogRef.current.close()
            }
        }
    }
    return (
        <dialog ref={dialogRef} className='app-dialog'>
            <div className='dialog-header'>
                <div onClick={() => setTabKey('password')} className={`${tabKey === 'password' ? 'active tabs-item' : ''}`} >密码登录</div>
                <div onClick={() => setTabKey('phone')} className={`${tabKey === 'phone' ? 'active tabs-item' : ''}`}>短信登录</div>
            </div>
            <div className='dialog-close' onClick={handleCloseModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5" stroke="#181D28" />
                    <path d="M5 5L19 19" stroke="#181D28" />
                </svg>
            </div>
            {tabKey === tabKeys[0] && <LoignPassword />}
            {tabKey === tabKeys[1] && <LoginPhone />}
        </dialog>
    )
}