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
        <CardContent>
          <CheckCircleOutlineOutlinedIcon
            color="success"
            sx={{ fontSize: 60 }}
          />
        </CardContent>
      </Card>

      <Button variant="contained" onClick={handleBackClick}>
        Back
      </Button>
    </>
  );
};

export default Success;
