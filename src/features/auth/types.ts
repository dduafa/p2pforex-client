export interface IUserLogin {
  email: string;
  password: string;
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
  errors: IError | [];
}

export interface IError {
  [index: number]: { message: string };
}
