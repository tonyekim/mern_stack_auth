import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [values, setValue] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValue({
      name: "",
      email: "",
    });

    navigate("/");
    console.log(values);
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValue({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValue({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
      />

      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
