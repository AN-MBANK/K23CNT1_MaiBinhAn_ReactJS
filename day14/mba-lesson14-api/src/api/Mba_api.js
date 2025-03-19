import axios from 'axios';

const MbaAxiosUsers = axios.create({
  baseURL: 'https://67d981e500348dd3e2ab64f2.mockapi.io/K23CNT1_maibinhan/:endpoint',
});

export default MbaAxiosUsers;
