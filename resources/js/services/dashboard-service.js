import axios from "axios";

export async function get_all_analytics_service(year,periodic) {
    const response = await axios.get(`/api/analytics?year=${year}&periodic=${periodic}`)
    return response.data;
  }
