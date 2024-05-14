import { useEffect, useState } from 'react'

const getRandomCaptcha = () => Math.random().toString(36).substring(2, 6)

export const useCaptcha = () => {
    const [captcha, setCaptcha] = useState<string>()
    const [dataUrl, setDataUrl] = useState<string>()
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
    useEffect(() => {
        if (ctx) {
            return
        }
        const canvas = document.createElement('canvas')
        setCtx(canvas.getContext('2d')!)
    }, [])

    const updateCaptcha = () => {
        const randomCaptcha = getRandomCaptcha()
        ctx?.clearRect(0, 0, 120, 40)
        ctx?.beginPath()
        ctx?.fillText(randomCaptcha, 120 / 2, 20)
        ctx?.closePath()
        setCaptcha(randomCaptcha)
        const imgData = ctx?.canvas.toDataURL('image/png')
        setDataUrl(imgData)

        console.log(randomCaptcha, imgData)
    }

    return {
        captcha,
        dataUrl,
        updateCaptcha,
    }
}