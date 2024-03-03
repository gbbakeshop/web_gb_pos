import axios from "axios";
export async function get_all_account_service() {
    const response = await axios.get('/api/accounts')
    return response.data;
  }

  export async function create_account_service(data) {
    const response = await axios.post('/api/accounts',data)
    return response.data;
  }

  export async function login_account_service(data) {
    const response = await axios.post('/login',data)
    return response.data;
  }

  export async function logout_account_service(data) {
    const response = await axios.post('/logout')
    return response.data;
  }

  export async function get_account_service() {
    const response = await axios.get('/api/user')
    return response.data;
  }