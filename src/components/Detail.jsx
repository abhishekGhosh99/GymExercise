import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPart, name: bodyPart, id: 1 },
    { icon: Target, name: target, id: 2 },
    { icon: Equipment, name: equipment, id: 3 },
  ];

  return (
    <Stack
      gap="100px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      mx="50px"
    >
      <img src={gifUrl} alt="name" loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. This {name} exercise is one of the best
          exercises to target your {target}. It will help you improve your mood
          and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
