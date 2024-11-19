import { createContext, useState } from "react";

export const SalonContext = createContext(null);

export const SalonContextProvider = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const showMenu = () => setMenuOpened(true);
  const hideMenu = () => setMenuOpened(false);

  const [bookFormData, setBookFormData] = useState({
    category: "",
    service: "",
    date: null,
    time: null,
    name: "",
    phone: "",
    email: "",
  });

  const changeBookData = (e) => {
    setBookFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeBookDate = (date) => {
    setBookFormData((prev) => ({ ...prev, date: date }));
  };

  const changeBookTime = (time) => {
    setBookFormData((prev) => ({ ...prev, time: time }));
  };

  const contextValue = {
    menuOpened,
    showMenu,
    hideMenu,
    bookFormData,
    changeBookData,
    changeBookDate,
    changeBookTime,
  };

  return (
    <SalonContext.Provider value={contextValue}>
      {props.children}
    </SalonContext.Provider>
  );
};
