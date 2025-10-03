export interface IUserSession {
  login: boolean;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    adress: string;
    phone: string;
    role: string;
    orders: [];
  };
}
