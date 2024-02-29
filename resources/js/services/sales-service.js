export async function get_sales_service(page) {
    const response = await axios.get('/api/sales?page='+page)
    return response.data;
}
export async function add_sales_service(data) {
    const response = await axios.post('/api/sales',data)
    return response.data;
}