import React, { useState } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

import CheckBox from "./CheckBox";

const SectionCard = (props) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = props?.data.reduce((acc, item) => {
    if (item.A) {
      return [...acc, [{ sectionTitle: item.A }]];
    } else {
      acc[acc.length - 1].push(item);
      return acc;
    }
  }, []);

  const handleNextClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection + 1);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("onSubmitted");
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-4">
      <form>
        {sections[currentSection].map((item, index) => (
          <div key={index}>
            {item.sectionTitle ? (
              <>
                <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
                  {item.sectionTitle}
                </p>
              </>
            ) : null}
            {item.B ? (
              <>
                <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 15, textAlign: "left", marginTop: 1 }}
                    >
                      {item.B}
                    </Typography>
                    <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>

                    {item.D === "Free text" ? (
                      <input
                        type="text"
                        className="mt-5 border-b-2 border-b-gray-500 w-[100%] focus:outline-none focus:border-b-green-600"
                        placeholder="Please type...."
                        required
                        value=""
                        onChange={() => handleChange}
                      />
                    ) : (
                      <CheckBox options={item?.D} />
                    )}
                  </CardContent>
                </Card>
              </>
            ) : null}
          </div>
        ))}

        <div className="mx-auto w-[65%] flex justify-between mt-3">
          {currentSection > 0 && (
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
          )}
          {currentSection === sections.length - 1 ? (
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" type="button" onClick={handleNextClick}>
              Next
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SectionCard;
