import request from "../request";

export class USConfirmed {
  getAll(year: string) {
    return request.get(`v2/time_series_confirmed_us/${year}`);
  }

  getById(year: string, id: number) {
    return request.get(`v2/time_series_confirmed_us/${year}/${id}`);
  }

  create(year: string, data: object) {
    return request.post(`v2/time_series_confirmed_us/${year}`, data);
  }

  updateById(year: string, id: number, data: object) {
    return request.put(`v2/time_series_confirmed_us/${year}/${id}`, data);
  }

  deleteById(year: string, id: number) {
    return request.delete(`v2/time_series_confirmed_us/${year}/${id}`);
  }
}