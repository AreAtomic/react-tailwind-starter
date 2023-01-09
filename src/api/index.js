import axios from 'axios'
export const proxy = process.env.REACT_APP_PROXY
export const url = `${proxy}/api/v1`

export const request = async (method, path, body, token, contentType) => {
    const config = {
        method: method,
        url: `${url}/${path}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': contentType || 'application/json',
            'Access-Control-Allow-Credentials': true,
            'x-access-token': token,
            withCredentials: true,
        },
        data: body,
    }

    console.log(config)
    return await axios(config)
        .then((response) => {
            // console.log('Axios response :', response)
            return { error: false, data: response.data, disconnected: false }
        })
        .catch((error) => {
            console.log('Axios error :', error)

            if (error.response) {
                if (
                    error.response.status === 401 ||
                    error.response.statusText === 'Unauthorized'
                ) {
                    return { error: true, disconnected: true }
                }
            }
            
            return {
                error: true,
                data: error.response?.data?.message || error.message,
                disconnected: false,
            }
        })
}
