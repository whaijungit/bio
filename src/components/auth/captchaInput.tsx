import { Button, Input, InputProps, ButtonProps } from 'antd'

interface CaptchaProps {
    value?: string
    inputProps?: InputProps
    buttonProps?: ButtonProps
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const CaptchaInput: React.FC<CaptchaProps> = (props) => {
    return (
        <div className='captcha-input'>
            <Input {...props.inputProps} value={props.value} onChange={props.onChange} />
            <Button {...props.buttonProps} style={{ fontSize: 14, fontWeight: 400 }} type='link' />
        </div>
    )
}