// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  /** magic logic ✨ */
  setTimeout(() => {
    const { password, email } = req.body;
    if (email == "example@gmail.com" && password == "123456") {
      return res.status(200).json({
        success: true,
        successText: "User found",
        user: {
          firstName: "Max",
          lastName: "Ivanov",
          email: "example@gmail.com",
        },
      });
    }
    return res
      .status(404)
      .json({ error: true, errorText: "Don`t know this user" });
  }, 1000);
}
