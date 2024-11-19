import { useContext } from "react";
import { SalonContext } from "../../../context/SalonContext";

import Fieldset from "./Fieldset";
import Input from "../../Input";

const FieldsetContacts = ({ errors, handleInput }) => {
  const { bookFormData } = useContext(SalonContext);

  return (
    <Fieldset tab="contacts" legend="Your Information">
      <Input
        type="text"
        name="name"
        id="bookingName"
        placeholder="Name"
        value={bookFormData.name}
        error={errors.name}
        onChange={(e) => handleInput(e)}
      />
      <Input
        type="tel"
        name="phone"
        id="bookingPhone"
        placeholder="Phone number"
        value={bookFormData.phone}
        error={errors.phone}
        onChange={(e) => handleInput(e)}
      />
      <Input
        type="email"
        name="email"
        id="bookingEmail"
        placeholder="Email Address"
        value={bookFormData.email}
        error={errors.email}
        onChange={(e) => handleInput(e)}
      />
    </Fieldset>
  );
};

export default FieldsetContacts;
