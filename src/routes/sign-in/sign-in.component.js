import { signInWithGooglePopup, createUserDocumentsFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentsFromAuth(user);
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