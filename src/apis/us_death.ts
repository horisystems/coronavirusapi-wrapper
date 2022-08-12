import request from "../request";

export class USDeath {
  getAll() {
    return request.get("v2/time_series_deaths_us");
  }

  getById(id: string) {
    return request.get(`v2/time_series_deaths_us/${id}`);
  }

  create(data: object) {
    return request.post("v2/time_series_deaths_us", data);
  }

  updateById(id: string, data: object) {
    return request.put(`v2/time_series_deaths_us/${id}`, data);
  }

  deleteById(id: string) {
    return request.delete(`v2/time_series_deaths_us/${id}`);
  }
}
