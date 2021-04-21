import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID NJ5vECDwpnkPr7LAqvcCsrda7-FxoIckGEmMHdzHyfc',
  },
});
