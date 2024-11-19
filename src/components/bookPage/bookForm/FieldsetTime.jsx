import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { SalonContext } from "../../../context/SalonContext";
import { workingHours } from "../../../data/workingHours";

import Fieldset from "./Fieldset";
import Paragraph from "../../Paragraph";

const _Input = styled.input.attrs({
  type: "radio",
})`
  display: none;
  &:checked + label {
    background-color: var(--peach800);
    border: 1px solid var(--peach800);
    color: var(--white);
  }
`;

const _Label = styled.label`
  align-items: center;
  border: 1px solid var(--dark);
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  padding: 0.75rem 0.125rem;
  transition: all 0.2s;
  &:hover {
    background-color: var(--peach050);
  }
`;

const FieldsetTime = ({ setCurrentTab }) => {
  const { bookFormData, changeBookTime } = useContext(SalonContext);
  const [hoursList, setHoursList] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (bookFormData.date === null) {
      setCurrentTab(1);
    } else {
      if (bookFormData.time !== null) {
        setSelectedTime(bookFormData.time);
      }
      let hours = [];
      let start, end;
      let currenHour = null;
      let weekDay = bookFormData.date.getDay();
      let now = new Date();
      if (
        bookFormData.date.getMonth() === now.getMonth() &&
        bookFormData.date.getDate() === now.getDate()
      ) {
        currenHour = bookFormData.date.getHours();
        currenHour += 2;
      }

      if (weekDay === 6) {
        start = currenHour ?? workingHours.sat.start;
        end = workingHours.sat.end;
      } else if (weekDay === 0) {
        start = currenHour ?? workingHours.sun.start;
        end = workingHours.sun.end;
      } else {
        start = currenHour ?? workingHours.monFri.start;
        end = workingHours.monFri.end;
      }

      if (start < end) {
        for (let i = start; i < end; i++) {
          hours.push(`${i}:00 - ${i + 1}:00`);
        }
        setHoursList(hours);
      }
    }
  }, []);

  const handleChange = (e) => {
    changeBookTime(e.target.value);
    setSelectedTime(e.target.value);
  };

  return (
    <>
      {hoursList.length > 0 ? (
        <Fieldset tab="time" legend="Time">
          {hoursList.map((item) => (
            <Fragment key={uuidv4()}>
              <_Input
                type="radio"
                name="bookTime"
                value={item}
                id={item.split(" ").join("")}
                checked={item === selectedTime}
                onChange={handleChange}
              />
              <_Label htmlFor={item.split(" ").join("")}>{item}</_Label>
            </Fragment>
          ))}
        </Fieldset>
      ) : (
        <Fieldset tab="date" legend="Time">
          <Paragraph>
            Sorry, there are no available slots for today. Please try selecting
            another day.
          </Paragraph>
        </Fieldset>
      )}
    </>
  );
};

export default FieldsetTime;

/*
<Fieldset tab="time" legend="Time">
      {hoursList.length > 0 ? (
        hoursList.map((item) => (
          <Fragment key={uuidv4()}>
            <_Input
              type="radio"
              name="bookTime"
              value={item}
              id={item.split(" ").join("")}
              checked={item === selectedTime}
              onChange={handleChange}
            />
            <_Label htmlFor={item.split(" ").join("")}>{item}</_Label>
          </Fragment>
        ))
      ) : (
        <Paragraph>
          Sorry, there are no available slots for today. Please try selecting
          another day.
        </Paragraph>
      )}
    </Fieldset>
*/
