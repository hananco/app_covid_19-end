import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const handleFormSubmit = () => {
    // e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/add/", values)
      .then((data) => {
        alert("Added");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const { handleChange, values, errors, handleSubmit } =
    useForm(handleFormSubmit);

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <div className="formHeader">
        <h3>Registration</h3>
        <Link to="/info">
          <button className="tableButton">Table info</button>
        </Link>
      </div>

      <div className="formInputs">
        <div>
          <Input
            handleOnChange={handleChange}
            label="First name"
            name="firstName"
          />
          {errors.firstName && (
            <small className="errorMessage">{errors.firstName}</small>
          )}
        </div>
        <div>
          <Input
            handleOnChange={handleChange}
            label="Last name"
            name="lastName"
          />
          {errors.lastName && (
            <small className="errorMessage">{errors.lastName}</small>
          )}
        </div>
        <div>
          <Input
            handleOnChange={handleChange}
            label="Birth Date"
            name="birthDate"
            type="date"
            required={true}
          />
        </div>
        <div>
          <Input handleOnChange={handleChange} label="Adress" name="address" />
          {errors.address && (
            <small className="errorMessage">{errors.address}</small>
          )}
        </div>
        <div>
          <Select name="city" handleOnChange={handleChange} />
        </div>
        <Input
          handleOnChange={handleChange}
          label="Zip Code (optional)"
          name="zipcode"
          type="number"
        />
        <div>
          <Input
            handleOnChange={handleChange}
            label="Land line"
            name="landLine"
            type="number"
          />
          {errors.landLine && (
            <small className="errorMessage">{errors.landLine}</small>
          )}
        </div>
        <div>
          <Input
            handleOnChange={handleChange}
            label="Cellular phone"
            name="cellularPhone"
            type="number"
          />
          {errors.cellularPhone && (
            <small className="errorMessage">{errors.cellularPhone}</small>
          )}
        </div>
        <div>
          <span>Did you get infected in Covid-19?</span>
          <div className="isInfectedContainer">
            <Input
              handleOnChange={handleChange}
              label="Yes"
              name="isInfected"
              type="radio"
              value={true}
              required={true}
            />
            <Input
              handleOnChange={handleChange}
              label="No"
              name="isInfected"
              type="radio"
              value={false}
            />
          </div>
        </div>
        <div>
          <span>Have you had other illnesses?</span>
          <Input
            handleOnChange={handleChange}
            label="Cardio-Vascular"
            name="other"
            type="checkbox"
            value="Cardio-Vascular"
          />
          <Input
            handleOnChange={handleChange}
            label="Diabetes"
            name="other"
            type="checkbox"
            value="Diabetes"
          />

          <Input
            handleOnChange={handleChange}
            label="Allergies"
            name="other"
            type="checkbox"
            value="Allergies"
          />
          <Input handleOnChange={handleChange} label="Other" name="other" />
        </div>
      </div>
      <button className="submitButton" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
