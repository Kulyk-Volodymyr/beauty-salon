import { useState } from "react";
import styled from "styled-components";

import Tabs from "./Tabs";
import BookForm from "./bookForm/BookForm";

const _Section = styled.section`
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    padding: 4.5rem 3rem;
  }
  @media (min-width: 992px) {
    padding-inline: 4.5rem;
  }
`;

const _Content = styled.div`
  @media (min-width: 768px) {
    border-radius: 1.5rem;
    box-shadow: 0.25rem 0.25rem 0.75rem #00000020, 1rem 1rem 1rem #00000010;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin: auto;
    max-width: 82rem;
  }
`;

const BookSection = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [dataProcessing, setDataProcessing] = useState("entry"); //filled, sending, sent

  return (
    <_Section>
      <_Content>
        <Tabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          dataProcessing={dataProcessing}
          setDataProcessing={setDataProcessing}
        />
        <BookForm
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          dataProcessing={dataProcessing}
          setDataProcessing={setDataProcessing}
        />
      </_Content>
    </_Section>
  );
};

export default BookSection;
