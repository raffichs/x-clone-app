import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    
    res.cookie("jwt", token, {
      maxAge: 1296000000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });

    console.log("Cookie set with token:", token);
  } catch (error) {
    console.log("Error in generateTokenAndSetCookie:", error.message);
  }
};
