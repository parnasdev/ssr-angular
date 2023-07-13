import { CityResponseDTO } from "./cityDTO";

export interface AuthRequestDTO {
  password?: string;
  code?: string;
  phone?: string;
  tokenType?: string;
}

export interface LoginResponseDTO {
  user: ProfileDTO;
  token: string
}

export interface ConvertRequestDTO {
  phone: string;
  password: string;
}

export interface UserDTO {
  id: number;
  role: string;
  phone: string;
  username: string;
  createdAt?: string;
  birthDay: string;
  family: string;
  name: string;
}

export interface ValidateResponseDTO {
  authMode: number;
  phone: string;
}

export interface ProfileReqDTO {
  name: string;
  family: string;
  email: string;
  idCard: string;
  birth_day: string;
}

export interface LoginReqDTO {
  phone: string | null;
  password: string;
  temp?: number
  accountType?: string;
}

export interface LoginRequestDTO {
  username: string;
  password: string;
}

export interface RegisterRequestDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ValidateResDTO {
  authMode: number;
  phone: string;
  accountType: string;
  password: boolean;
}

export interface ChangePasswordReqDTO {
  code: string;
  phone: string;
  password: string;
}

export interface ProfileDTO {
  justEditProfile?: boolean;
  username: string;
  family: string;
  name: string;
  id_code: string;
  phone: string;
  email: string;
  gender: number;
  isManager?: boolean | null
  city: CityResponseDTO;
  agency: {
    name: string;
    logo: string | null;
    LicenseFileA: string | null;
    extra: '',
    id?: number;
    LicenseFileB: string | null;
    email: string;
    verify?: boolean
    address: string;
    tell: string;
    site: string;
    necessaryPhone: string;
  }
  birthDay?: string;
  createdAt?: string;
  role?: string;
}
