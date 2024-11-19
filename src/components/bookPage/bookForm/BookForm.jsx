import { useState, useContext } from "react";
import styled from "styled-components";
import { SalonContext } from "../../../context/SalonContext";
import { services } from "../../../data/services";

import FieldsetService from "./FieldsetService";
import FieldsetDate from "./FieldsetDate";
import FieldsetTime from "./FieldsetTime";
import FieldsetContacts from "./FieldsetContacts";
import ConfirmBook from "../ConfirmBook";
import SendingBook from "../SendingBook";
import SentBook from "../SentBook";
import Navigation from "./Navigation";

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 33.5rem;
`;

const _Form = styled.form`
  flex: 1;
  padding: 2.5rem 1.5rem;
  @media (min-width: 768px) {
    flex: 1;
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

const BookForm = ({
  currentTab,
  setCurrentTab,
  dataProcessing,
  setDataProcessing,
}) => {
  const [errors, setErrors] = useState({
    category: false,
    service: false,
    name: false,
    phone: false,
    email: false,
  });
  const { bookFormData, changeBookData } = useContext(SalonContext);
  const servicesList = [...services.map((i) => i.title)];
  const [categorySelected, setCategorySelected] = useState(false);
  const [servicesByCategory, setServicesByCategory] = useState([]);

  const handleInput = (e) => {
    changeBookData(e);
    errors[e.target.name] && setErrors({ ...errors, [e.target.name]: false });
  };

  const handleCategory = (e) => {
    handleInput(e);
    if (servicesList.includes(e.target.value)) {
      let servicesFromCategory = services
        .find((i) => i.title === e.target.value)
        .services.map((i) => i.name + ", £ " + i.price);
      setServicesByCategory(servicesFromCategory);
      setCategorySelected(true);
    } else {
      setServicesByCategory([]);
      setCategorySelected(false);
    }
  };

  const handleForm = () => {
    const data = { ...bookFormData };
    if (!servicesList.includes(data.category)) {
      setErrors({ ...errors, category: true });
      setCurrentTab(0);
      return;
    }
    if (!servicesByCategory.includes(data.service)) {
      setErrors({ ...errors, service: true });
      setCurrentTab(0);
      return;
    }
    if (data.date === null) {
      setCurrentTab(1);
      return;
    }
    if (data.time === null) {
      setCurrentTab(2);
      return;
    }
    if (data.name.length < 3) {
      setErrors({ ...errors, name: true });
      return;
    }
    if (!/\d{9,}/.test(data.phone)) {
      setErrors({ ...errors, phone: true });
      return;
    }
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        data.email
      )
    ) {
      setErrors({ ...errors, email: true });
      return;
    }
    setDataProcessing("filled");
  };

  return (
    <_Container>
      {dataProcessing === "entry" && (
        <_Form>
          {currentTab === 0 && (
            <FieldsetService
              errors={errors}
              handleInput={handleInput}
              handleCategory={handleCategory}
              categorySelected={categorySelected}
              servicesList={servicesList}
              servicesByCategory={servicesByCategory}
            />
          )}
          {currentTab === 1 && <FieldsetDate />}
          {currentTab === 2 && <FieldsetTime setCurrentTab={setCurrentTab} />}
          {currentTab === 3 && (
            <FieldsetContacts errors={errors} handleInput={handleInput} />
          )}
        </_Form>
      )}

      {dataProcessing === "filled" && <ConfirmBook />}

      {dataProcessing === "sending" && (
        <SendingBook setDataProcessing={setDataProcessing} />
      )}

      {dataProcessing === "sent" && <SentBook />}

      <Navigation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        dataProcessing={dataProcessing}
        setDataProcessing={setDataProcessing}
        handleForm={handleForm}
      />
    </_Container>
  );
};

export default BookForm;
