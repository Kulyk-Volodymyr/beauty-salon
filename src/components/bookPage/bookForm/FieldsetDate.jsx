import { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { SalonContext } from "../../../context/SalonContext";

import Fieldset from "./Fieldset";

const _Calendar = styled(Calendar)`
  border: 1px solid var(--dark);
  border-radius: 0.5rem;
  font-family: "Jost", sans-serif;
  overflow: hidden;
  width: 100%;
  & .react-calendar__navigation {
    border-bottom: 1px solid var(--dark);
  }
  & .react-calendar__navigation__prev2-button,
  & .react-calendar__navigation__next2-button {
    display: none;
  }
  & .react-calendar__month-view__weekdays__weekday {
    text-decoration: none !important;
    text-transform: capitalize;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 0.25rem;
  }
  & .react-calendar__tile {
    padding: 0.75rem 0.125rem;
    &:enabled:hover {
      background-color: var(--peach050);
    }
  }
  & .react-calendar__tile--now {
    background: var(--peach200);
    &:hover {
      background: var(--peach050);
    }
  }
  & .react-calendar__tile--active {
    background: var(--peach800);
    &:enabled:hover,
    &:enabled:focus {
      background: var(--peach800);
    }
  }
`;

const FieldsetDate = () => {
  const { bookFormData, changeBookDate, changeBookTime } =
    useContext(SalonContext);
  const today = new Date();
  let lastDay = new Date();
  lastDay.setMonth(today.getMonth() + 3);
  const [bookDate, setBookDate] = useState((bookFormData.date ??= today));

  const handleDate = (value) => {
    if (bookFormData.time !== null) changeBookTime(null);
    setBookDate(value);
    changeBookDate(value);
  };

  return (
    <Fieldset tab="date" legend="Date">
      <_Calendar
        onChange={(value) => handleDate(value)}
        value={bookDate}
        minDate={today}
        maxDate={lastDay}
        locale="en-en"
      />
    </Fieldset>
  );
};

export default FieldsetDate;
