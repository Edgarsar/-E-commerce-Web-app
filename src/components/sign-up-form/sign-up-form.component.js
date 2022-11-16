import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = defaultFormFields;

  return (
    <div>
      <h1>Sign Up With your Email and Password</h1>
      <form onSubmit={() => { }}>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit">Sign UP</button>
      </form>
    </div>

  );
}

export default SignUpForm;