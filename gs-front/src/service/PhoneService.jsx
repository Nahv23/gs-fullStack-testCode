import http from './BaseService';


export const getPhones = async () => {
  let result = {
    phones: [],
    state: false,
    message: ''
  };
  try {
    let response = await http.get(`/phones`);
    if (response && typeof (response) === 'object' && response.data) {
      result.phones = response.data;
    }
    result.state = true;
  } catch (error) {
    result.state = false;
    if (error.request === undefined || error.request.status === 500) {
      result.message = 'Server error';
    } else {
      result.message = error.message;
    }
  }

  return result;
}

export default {
  getPhones,
}