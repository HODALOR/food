const login = async (data) => {
  let logged = true;
  localStorage.setItem("resUser", JSON.stringify(data));
  
  return logged;
};

module.exports = login;
