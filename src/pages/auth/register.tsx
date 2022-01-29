import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../config/firebase";

const Register: React.FC = () => {
  // 認証周りのstateの宣言
  const [registering, setRegistring] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  // page遷移の設定
  const history = useHistory();

  // sign upについての設定
  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) setPassword("please check your passwords match");

    if (error !== "") setError("");

    setRegistring(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        history.push("/login");
      })
      .catch((error) => {
        logging.error(error);
        if (error.code.inclues("auth/weak-password")) {
          setError("please enter a stronger password");
        } else if (error.code.inclues("auth/email-already-in-use")) {
          setError("email is already in use");
        } else {
          setError("login failed. please try again later");
        }
      });
    setRegistring(false);
  };

  // viewの作成
  return (
    <div>
      {/* form作成 */}
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          autoComplete="new password"
          type="new password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          autoComplete="new password"
          type="new password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
          value={confirm}
        />
      </div>
      <button
        disabled={registering}
        onClick={() => {
          signUpWithEmailAndPassword();
        }}
      >
        sign in
      </button>

      {/* 仮にアカウントがあった場合のリンク */}
      <h5>
        <p>if you already have an account??</p>
        <Link to="/login">log in</Link>>
      </h5>
    </div>
  );
};

export default Register;
