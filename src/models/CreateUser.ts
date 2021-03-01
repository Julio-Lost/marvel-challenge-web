export interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IResponseCreateUser {
  name: string;
  email: string;
  id: string;
  created_at: string;
  updated_at: string;
}
