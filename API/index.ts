export const getAuth = (params: { email: string; password: string }) => {
  return fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  }).then(async (res) => {
    const resolve = await res.json();
    if (resolve.user) {
      sessionStorage.setItem("login", JSON.stringify(resolve.user));
    }
    return resolve;
  });
};
