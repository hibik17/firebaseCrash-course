import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  // 認証周りのstateの宣言
  const [registering, setRegistring] = useState<boolean>(false);
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirm, setconfirm] = useState<string>("");
  const [error, seterror] = useState<string>("");

  const history = useHistory();
  return <div></div>;
};

export default register;
