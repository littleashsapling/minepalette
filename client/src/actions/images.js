import axios from 'axios'
import { BASE_API_URL } from '../utils/constants'
import { getErrors } from './error'

export const beginAddImage = async(image) => {
    const formData = new FormData()
    formData.append('image', image)
    await axios.post(`${BASE_API_URL}/block`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const startLoadImage = () => {
    return async(dispatch) => {
        try {
            const image = await axios.get(`${BASE_API_URL}/image`)
            dispatch(loadImage(image.data))
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data))
        }
    }
}

export const loadImage = (image) => ({
    type: 'LOAD_IMAGE',
    image
})