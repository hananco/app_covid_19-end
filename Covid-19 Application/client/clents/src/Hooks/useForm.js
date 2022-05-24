import { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  // Form values
  const [values, setValues] = useState({});
  // Form errors
  const [errors, setErrors] = useState({});

  // Input validate function
  const validate = (event, name, value) => {
    switch (name) {
      case "firstName":
        if (value.length === 0) {
          console.log("here");
          setErrors({ ...errors, firstName: "First Name is required" });
          console.log(errors);
        } else {
          // Remove value from the object and returns a new one
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (value.length === 0) {
          setErrors({ ...errors, lastName: "Last Name is required" });
          console.log(errors);
        } else {
          // Remove value from the object and returns a new one
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;
      case "address":
        if (value.length === 0) {
          setErrors({ ...errors, address: "Adress is required" });
        } else {
          // Remove value from the object and returns a new one
          let newObj = omit(errors, "address");
          setErrors(newObj);
        }
        break;
      case "landLine":
        if (value.length === 0) {
          setErrors({ ...errors, landLine: "Land Line is required" });
        } else {
          // Remove value from the object and returns a new one
          let newObj = omit(errors, "landLine");
          setErrors(newObj);
        }
        break;
      case "cellularPhone":
        if (value.length === 0) {
          setErrors({ ...errors, cellularPhone: "Cellular Phone is required" });
        } else {
          // Remove value from the object and returns a new one
          let newObj = omit(errors, "cellularPhone");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  // A method to handle from inputs
  const handleChange = (event) => {
    // To stop default events
    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    validate(event, name, value);

    //Save values in the state
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(values);
    if (
      !values?.firstName ||
      !values?.lastName ||
      !values?.address ||
      !values?.landLine ||
      !values?.cellularPhone
    ) {
      alert("Please fill the form");
      return;
    }
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      return;
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
