// api.config.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL } from './enviroment.config';

// Import the FormData interface from your Popup component
interface FormData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  acceptPrivacy: boolean;
}

class ApiGatewayService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL || '',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Submit contact form data to API Gateway
   */
  async submitContactForm(formData: FormData): Promise<AxiosResponse> {
    try {
      const response = await this.api.post('/form-submission', formData);
      return response;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
}

const apiGatewayService = new ApiGatewayService();

export default apiGatewayService;
