import { signIn, getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { Button, TextInput } from "@mantine/core";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const session = getSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

  };
  
  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-5">
        <TextInput
          type="email"
          label="Email"
          placeholder="me@email.com"
          value={userInfo.email}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, email: target.value });
          }}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="*********"
          value={userInfo.password}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, password: target.value });
          }}
        />

        <Button onClick={handleSubmit} className="bg-cyan-600">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Signin;
