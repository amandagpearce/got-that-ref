import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userType: '',
  login: () => {},
  logout: () => {},
});

export default AuthContext;
