/** @format */

import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const Success = ({ currentSection, setCurrentSection }) => {
  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };

  return (
    <>
      <Card
        sx={{ width: "65%", margin: "auto", marginTop: 3, marginBottom: 4 }}
      >
        <CardContent sx={{ margin: "auto", textAlign: "center" }}>
          <CheckCircleOutlineOutlinedIcon
            color="success"
            sx={{ fontSize: 60 }}
          />
        </CardContent>
      </Card>
      <div className="mx-auto w-[65%] flex justify-between mt-3">
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>
      </div>
    </>
  );
};

export default Success;
