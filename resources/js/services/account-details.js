import axios from "axios";

export async function get_all_account_details_service(id, filter) {
  const response = await axios.get('/api/account_details?cashier_id=' + id + '&search=' + filter.search + '&year=' + filter.year)
  return response.data;
}


export async function edit_account_service(data) {
  const response = await axios.put(`/api/accounts/${data.id}`,data)
  return response.data;
}

export async function change_account_password_service(data) {
  const response = await axios.post(`/api/change_account_password/${data.id}`,data)
  return response.data;
}

export async function delete_account_service(data) {
  const response = await axios.delete(`/api/accounts/${data.id}`)
  return response.data;
}