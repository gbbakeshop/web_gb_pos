export async function get_products_service(data) {
    const response = await axios.get('/api/products')
    return response.data;
}

export async function create_product_service(data) {
    const response = await axios.post('/api/products', data)
    return response.data;
}

export async function edit_product_service(data) {
    const response = await axios.put(`/api/products/${data.id}`, data)
    return response.data;
}
export async function get_specific_product_service(id) {
    const response = await axios.get(`/api/products/${id}`)
    return response.data;
}

export async function delete_product_service(data) {
    const response = await axios.delete(`/api/products/${data.id}`)
    return response.data;
}