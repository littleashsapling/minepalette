import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertBlock = payload => {
    const formData = new FormData()
    for (const k in payload) {
        formData.append(k, payload[k])
    }

    return api.post('/block', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const getAllBlocks = () => api.get('/blocks')
export const updateBlockById = (id, payload) => api.put('/block/${id}', payload)
export const deleteBlockById = id => api.delete('/movie/${id}')
export const getBlockById = id => api.get('/block/${id}')

const apis = {
    insertBlock,
    getAllBlocks,
    updateBlockById,
    deleteBlockById,
    getBlockById
}

export default apis