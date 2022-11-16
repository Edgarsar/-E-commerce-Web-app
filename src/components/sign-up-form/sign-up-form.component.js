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

  const handleChange = (event) => {

  };

  return (
    <div>
      <h1>Sign Up With your Email and Password</h1>
      <form onSubmit={() => { }}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} nmae="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign UP</button>
      </form>
    </div>

  );
}

export default SignUpForm;