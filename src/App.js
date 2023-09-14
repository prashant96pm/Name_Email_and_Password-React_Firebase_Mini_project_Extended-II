import React, { useState, useEffect } from "react";

function FormApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      if (password.length < 8) {
        setPassword(password + "a");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(name === "name" ? value.toUpperCase() : value);
    setEmail(name === "email" ? value.toLowerCase() : value);
    setPassword(value);
  };

  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormApp;
