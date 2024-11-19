import { v4 as uuidv4 } from "uuid";

const Datalist = ({ listName, list }) => {
  return (
    <datalist id={listName}>
      {list.map((item) => (
        <option key={uuidv4()} value={item}>
          {item}
        </option>
      ))}
    </datalist>
  );
};

export default Datalist;
