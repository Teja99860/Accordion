import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(id);
    if (selected === id) {
      setSelected(null);
    }
  };

  const handleMultiSelect = (id) => {
    if (multiSelected.includes(id)) {
      setMultiSelected(multiSelected.filter((selectedId) => selectedId !== id));
    } else {
      setMultiSelected([...multiSelected, id]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col ">
      <button
        type="button"
        className="text-lg font-semibold border rounded-md px-4 py-2 bg-orange-600 cursor-pointer mb-5"
        onClick={() => setEnableMultiSelect(true)}
      >
        Multi Select
      </button>
      {data?.map(({ question, id, answer }) => (
        <div className="w-1/2">
          <div
            className="flex justify-between border rounded-md px-5 py-2 bg-orange-500 text-lg font-semibold"
            onClick={
              enableMultiSelect
                ? () => handleMultiSelect(id)
                : () => handleSingleSelect(id)
            }
          >
            <div className="flex-col">{question}</div>
            <span>+</span>
          </div>
          <div>
            {enableMultiSelect
              ? multiSelected.includes(id) && (
                  <div className="flex justify-between border rounded-md px-5 py-3 bg-orange-400 ">
                    {answer}
                  </div>
                )
              : selected === id && (
                  <div className="flex justify-between border rounded-md px-5 py-3 bg-orange-400 ">
                    {answer}
                  </div>
                )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
