import axios from 'axios';
import { API_BASE_URL } from '../config';

export const createPipeline = async (
    name: string,
    description: string,
    price: string,
    sourceOne: string,
    sourceTwo: string,
    sourceThree: string,
    sourceFour: string,
    user: string
) => {
    try {

        const response = await axios.post(
            `${API_BASE_URL}/api/v1/pipeline/create`,
            {
                name,
                description,
                price,
                sourceOne,
                sourceTwo,
                sourceThree,
                sourceFour,
                user,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllPipelines = async (
    user: string,
) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/v1/pipeline/userPipelines`,
            {
                user: user || ' '
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const uploadCode = async (formData: any, pipeline: string) => {

    try {
        axios({
            method: 'post',
            url: `${API_BASE_URL}/api/v1/pipeline/code/${pipeline}`,
            data: formData,
          })
            .then((response) => {
              if (response.data.success) {
                alert(response.data.menu)
              } else {
                alert('something went wrong')
              }
            })
            .catch((error) => {
              console.log(error);
            });

    } catch (error) {

    }
}