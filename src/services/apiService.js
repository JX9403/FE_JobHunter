import axios from "../utils/axiosCustomize";



const postCreateNewUser = async (name, email, password, gender, address, age, role, company) => {
  let data = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    address: address,
    age: age,
    role: role,
    company: company
  }

  try {
    const response = await axios.post('api/v1/users', data);
    return response.data;
    // console.log('User created successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // console.error('Response data:', error.response.data);
      return error.response.data;
      // toast.error(error.response.data.message);
    }
  }
}

const getAllUser = async () => {
  try {
    const response = await axios.get('api/v1/users?sort=createdAt,desc');
    return response.data;
    // console.log('User created successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // console.error('Response data:', error.response.data);
      return error.response.data;
      // toast.error(error.response.data.message);
    }
  }
}

const putUpdateUser = async (id, name, gender, address, age, role, company) => {
  let data = {
    id: id,
    name: name,
    gender: gender,
    address: address,
    age: age,
    role: role,
    company: company
  }

  try {
    const response = await axios.put('api/v1/users', data);
    return response.data;
    // console.log('User created successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // console.error('Response data:', error.response.data);
      return error.response.data;
      // toast.error(error.response.data.message);
    }
  }
}



export { postCreateNewUser, getAllUser, putUpdateUser }