export interface LoginProps {
    loading: boolean
    onLogin: (values: any) => Promise<boolean>
}