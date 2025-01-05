import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [singleSelected, setSingleSelected] = useState(null);
  const [enableMultiSelect, setEnaableMutliSelect] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSingleSelect = (id) => {
    setSingleSelected(id);
    singleSelected === id && setSingleSelected(null);
  };

  const handleEnableMultiSelect = () => {
    setEnaableMutliSelect(true);
  };

  const handleMultiSelect = (id) => {
    multiSelection.includes(id)
      ? setMultiSelection(multiSelection.filter((selected) => selected !== id))
      : setMultiSelection([...multiSelection, id]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="mb-5 text-lg font-semibold border rounded-md bg-orange-500 px-4 py-2"
        onClick={handleEnableMultiSelect}
      >
        Enable MultiSelect
      </button>
      {data.map(({ id, question, answer }) => (
        <div className="w-1/2" key={id}>
          <div
            className="flex items-center justify-between border rounded-md px-4 py-2 bg-orange-500"
            onClick={
              enableMultiSelect
                ? () => handleMultiSelect(id)
                : () => handleSingleSelect(id)
            }
          >
            <p className="text-lg font-semibold">{question}</p>
            <span>+</span>
          </div>
          {/* {enableMultiSelect
            ? multiSelection.includes(id) && (
                <p className="bg-orange-400 px-4 py-2 rounded-md">{answer}</p>
              )
            : singleSelected === id && (
                <p className="bg-orange-400 px-4 py-2 rounded-md">{answer}</p>
              )} */}
          {(multiSelection.includes(id) || singleSelected === id) && (
            <p className="bg-orange-400 px-4 py-2 rounded-md">{answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
