import { useContext } from "react";
import { SalonContext } from "../../../context/SalonContext";

import Fieldset from "./Fieldset";
import Input from "../../Input";
import Datalist from "./Datalist";

const FieldsetService = ({
  errors,
  handleInput,
  handleCategory,
  categorySelected,
  servicesList,
  servicesByCategory,
}) => {
  const { bookFormData } = useContext(SalonContext);

  return (
    <Fieldset tab="service" legend="Service">
      <Input
        type="text"
        name="category"
        id="bookingCategory"
        value={bookFormData.category}
        error={errors.category}
        onChange={(e) => handleCategory(e)}
        list="categories"
      />
      <Datalist listName="categories" list={servicesList} />

      {categorySelected && (
        <>
          <Input
            type="text"
            name="service"
            id="bookingService"
            value={bookFormData.service}
            error={errors.service}
            onChange={(e) => handleInput(e)}
            list="services"
          />
          <Datalist listName="services" list={servicesByCategory} />
        </>
      )}
    </Fieldset>
  );
};

export default FieldsetService;
