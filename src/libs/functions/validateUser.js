const validateUser = async () => {
  var results = false;
  const userData = localStorage.getItem("resUser");
  const data = await JSON.parse(userData);
  if (data === null) return (results = false);
  if (data === undefined) return (results = false);
  if (data !== null && data !== undefined) return (results = true);

  return results;
};

module.exports = validateUser;
