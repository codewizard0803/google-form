import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const InitialCard = (props) => {
    return (
			<div className="mt-5">
        <Card sx={{ width: '65%', margin: 'auto' }}>
          <p className="h-3 bg-green-400 w-100"></p>
          <CardContent>
            <Typography sx={{ fontSize: 30, textAlign: 'left' }}>
              {props.title}
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>

              <div className="flex mt-2">
                <p className="text-blue-700">Sign in to your Google account</p> <p className="ml-1">to save your changes</p>
              </div>

          </CardContent>

        </Card>
			</div>
    );
};

export default InitialCard;