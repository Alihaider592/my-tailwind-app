// Logout.js
export const handleLogout = (onLogout, navigate) => {
  localStorage.removeItem("users");
  if (onLogout) onLogout();
  navigate("/Signup");
};
