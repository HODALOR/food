const logout = async () => {
  localStorage.removeItem("resUser");
  return true;
};

module.exports = logout;
