import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InitialCard = (props) => {
  return (
    <div className="mt-5">
      <Card sx={{ width: "65%", margin: "auto" }}>
        <p className="h-3 bg-green-400 w-100"></p>
        <CardContent>
          <Typography sx={{ fontSize: 30, textAlign: "left" }}>
            Initial Intake Form
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialCard;
