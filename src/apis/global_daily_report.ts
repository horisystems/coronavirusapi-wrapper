import request from "../request";

interface GDRForm {
  fips: string;
  admin2: string;
  province_state: string;
  country_region: string;
  last_update: string;
  latitude: string;
  longitude: string;
  confirmed: string;
  deaths: string;
  recovered: string;
  active: string;
  combined_key: string;
  incidence_rate: string;
  case_fatality_ratio: string;
  incident_rate: string;
  casefatality_ratio: string;
}

export class GlobalDailyReport {
  async getAll(month: string, year: number) {
    return request.get(`v2/${month}/${year}`);
  }

  async getById(month: string, year: number, id: number) {
    return request.get(`v2/${month}/${year}/${id}`);
  }

  async create(month: string, year: number, data: GDRForm) {
    return request.post(`v2/${month}/${year}`, data);
  }

  async updateById(month: string, year: number, id: number, data: GDRForm) {
    return request.put(`v2/${month}/${year}/${id}`, data);
  }

  async deleteById(month: string, year: number, id: number) {
    return request.delete(`v2/${month}/${year}/${id}`);
  }
}
