// api.config.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL } from './enviroment.config';

// Import the FormData interface from your Popup component
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  acceptPrivacy: boolean;
}

export interface RecruitmentFormData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  me: string;
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
  async submitHeatpumpContactForm(formData: ContactFormData): Promise<AxiosResponse> {
    try {
      const response = await this.api.post('/lead/heatpump', formData);
      return response;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }

  async submitApplicationContactForm(formData: ContactFormData): Promise<AxiosResponse> {
    try {
      const response = await this.api.post('/lead/application', formData);
      return response;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }

  /**
   * Submit recruitment form data to API Gateway
   */
  async submitRecruitmentForm(formData: RecruitmentFormData): Promise<AxiosResponse> {
    try {
      const response = await this.api.post('/recruitment', formData);
      return response;
    } catch (error) {
      console.error('Error submitting recruitment form:', error);
      throw error;
    }
  }
}

export const apiGatewayService = new ApiGatewayService();
