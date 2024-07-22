

function SignupValidation(email,password) {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email.trim()) return "Email is required";
    if (!isEmailValid) return "Email is not valid";

    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
        password
      ); // Minimum 8 characters, at least one letter and one number
      if (!password.trim()) return "Password is required";
      if (!isPasswordValid)
    return "Password must be at least 8 characters long and contain at least one letter and one number";
}

export default SignupValidation