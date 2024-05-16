export const awit = function (druation: number = 1000) {
    return new Promise<undefined>(reslove => {
        setTimeout(() => {
            reslove(undefined)
        }, druation);
    })
}