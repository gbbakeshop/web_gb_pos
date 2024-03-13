export async function get_loyal_card_service(data) {
    const response = await axios.get('/api/loyal_cards')
    return response.data;
}

export async function create_loyal_card_service(data) {
    const response = await axios.post('/api/loyal_cards', data)
    return response.data;
}

export async function edit_loyal_card_service(data) {
    const response = await axios.put(`/api/loyal_cards/${data.id}`, data)
    return response.data;
}
export async function get_specific_loyal_card_service(id) {
    const response = await axios.get(`/api/loyal_cards/${id}`)
    return response.data;
}

export async function delete_loyal_card_service(data) {
    const response = await axios.delete(`/api/loyal_cards/${data.id}`)
    return response.data;
}