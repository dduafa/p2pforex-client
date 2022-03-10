export interface IUserLogin {
  email: string;
  password: string;
}

export interface IChangePassword {
  password: string;
  token: string;
}

export interface IUserSignup extends IUserLogin {
  firstname: string;
  lastname: string;
  phonenumber: string;
  role?: string;
}

export interface IUserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;
  role?: string;
}

export interface IAuthState {
  user: IUserData | undefined;
  loading: boolean;
  isAuthenticated: boolean;
  errors: Error[] | [];
}
export interface Error {
  message: string;
}
