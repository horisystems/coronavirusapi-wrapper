import request from "../request";

export class GlobalRecovered {
  getAll() {
    return request.get("v2/time_series_recovered_global");
  }

  getById(id: string) {
    return request.get(`v2/time_series_recovered_global/${id}`);
  }

  create(data: object) {
    return request.post("v2/time_series_recovered_global", data);
  }

  updateById(id: string, data: object) {
    return request.put(`v2/time_series_recovered_global/${id}`, data);
  }

  deleteById(id: string) {
    return request.delete(`v2/time_series_recovered_global/${id}`);
  }
}
