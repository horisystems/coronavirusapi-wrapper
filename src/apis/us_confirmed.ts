import request from "../request";

export class USConfirmed {
  getAll() {
    return request.get("v2/time_series_confirmed_us");
  }

  getById(id: string) {
    return request.get(`v2/time_series_confirmed_us/${id}`);
  }

  create(data: object) {
    return request.post("v2/time_series_confirmed_us", data);
  }

  updateById(id: string, data: object) {
    return request.put(`v2/time_series_confirmed_us/${id}`, data);
  }

  deleteById(id: string) {
    return request.delete(`v2/time_series_confirmed_us/${id}`);
  }
}
