
export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const logout = () => {
  localStorage.setItem('isLoggedIn', 'false');
};
