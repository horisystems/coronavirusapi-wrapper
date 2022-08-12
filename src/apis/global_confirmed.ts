import request from "../request";

export class GlobalConfirmed {
  getAll() {
    return request.get("v2/time_series_confirmed_global");
  }

  getById(id: string) {
    return request.get(`v2/time_series_confirmed_global/${id}`);
  }

  create(data: object) {
    return request.post("v2/time_series_confirmed_global", data);
  }

  updateById(id: string, data: object) {
    return request.put(`v2/time_series_confirmed_global/${id}`, data);
  }

  deleteById(id: string) {
    return request.delete(`v2/time_series_confirmed_global/${id}`);
  }
}
