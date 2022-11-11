import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };


  return (
    <div>
      <h1>This is a Sign In page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google Popup
      </button>
    </div>
  );
};

export default SignIn;