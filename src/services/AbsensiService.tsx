import axios from "axios";

const REST_API_BASE_URL: string = 'http://localhost:8080/api/disdukcapil-salatiga/pegawai';

export const listPegawai = () => axios.get(REST_API_BASE_URL);