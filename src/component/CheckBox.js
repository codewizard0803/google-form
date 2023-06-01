import React, {useState} from 'react';

const CheckBox = ({ options }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [radioItems, setRadioItems] = useState({})
 
  let splitOptions = [];
  let checkboxItems = [];
  if (options) {
    splitOptions = options?.split('\n');
    splitOptions[0] === "Select all that apply:" ? checkboxItems = splitOptions?.slice(1).map(item => {
      const label = item.replace(/^\w+\.\s/, ''); 
      return { label, value: label };
    }): 
    checkboxItems = splitOptions?.map(item => {
      const label = item.replace(/^\w+\.\s/, ''); 
      return { label, value: label };
    });

    console.log('checkboxItems', checkboxItems)
  }
  
  const handleCheckChange = event => {
    // setCheckedItems({
    //   ...checkedItems,
    //   [event.target.name]: event.target.checked
    // });
  };

  const handleRadioChange = (event) => {
    setRadioItems(event.target.value);
  }

  return (
    <>
        {
        splitOptions[0] === "Select all that apply:" ? <div className="mt-3 text-left">
          {checkboxItems?.map((item, index) => (
            <div key={index}>
              <label key={item.value}>
                <input
                  type="checkbox"
                  className="mr-2"
                  name={item.value}
                  checked={checkedItems[item.value]}
                  onChange={handleCheckChange}
                />
                {item.label}
              </label>
            </div>
          ))}
        </div> : <div className="mt-3 text-left">
             {checkboxItems?.map((item, index) => (
            <div key={index}>
              <label key={item.value}>
                <input
                  type="radio"
                  className="mr-2"
                  value={item.value}
                  checked={radioItems === item.value}
                  onChange={handleRadioChange}
                />
                {item.label}
              </label>
            </div>
          ))
        }
          </div>
         
    }
 
    </>
  
  )
}

export default CheckBox;