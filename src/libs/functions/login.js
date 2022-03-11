// validation and user login function
const login = async (data) => {
  if (data.email === "") return null;
  if (data.password === "") return null;
  if (data.terminal === "") return null;

  localStorage.setItem("resUser", JSON.stringify(data));

  return true;
};

// fetch user and pass user data from storage/persistence
const getUserData = async () => {
  const userData = localStorage.getItem("resUser");
  const user = await JSON.parse(userData);

  if (!user) return null;

  return user;
};

// check if user is authorized
const _checkUserAuth = async () => {
  const user = await getUserData();
  if (user) return true;
  if (!user) return false;
};

export { login, getUserData, _checkUserAuth };
