interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export const savetToken = ({ accessToken, refreshToken }: ITokens) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const clearTokens = () => {
  localStorage.clear();
};
