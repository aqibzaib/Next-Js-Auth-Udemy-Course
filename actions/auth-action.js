"use server";
export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};
  console.log("email and password===>", email, password);
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must  be at least 8 characters long.";
  }
  if (Object.entries(errors).length > 0) {
    return {
      errors: errors,
    };
  }
}
