export interface IRequestSession {
  email: string;
  password: string;
}

export interface IResponseSession {
  id: string;
  email: string;
  userName: string;
  token: string;
}
