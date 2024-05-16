import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const usePagantion = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const defaultPage = Number(searchParams.get('page') || 1)
    const defaultPageSize = Number(searchParams.get('size') || 10)
    const [page, setPage] = useState(defaultPage)
    const [pageSize, setPageSize] = useState(defaultPageSize)

    return {
        page,
        pageSize,
        onChangePage(page: number) {
            setPage(page)
            setPageSize(10)
            searchParams.set('page', page + '')
            searchParams.set('size', pageSize + '')
            setSearchParams(searchParams)
        },
        onChangePageSize(size: number) {
            setPageSize(size)
            searchParams.set('size', size + '')
            setSearchParams(searchParams)
        }
    }
}
