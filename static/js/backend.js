export const getMe = () => {
    return axios.get('/me')
        .then((response) => {
            return response
        }).catch((e) => {
            return ''
    })
}