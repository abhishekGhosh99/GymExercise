import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "120px", xs: "100px" } }} textAlign="center">
      <Typography variant="h4" mb="60px" textTransform="capitalize">
        Watch{" "}
        <span style={{ color: "#ff2625", fontWeight: "700" }}>{name}</span>{" "}
        exercises videos
      </Typography>

      <Stack
        className="exercise-video-card"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "20px", xs: "0" },
        }}
      >
        {exerciseVideos.slice(0, 9).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              background: "#333333",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "20px 0",
            }}
          >
            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  borderRadius: "20px",
                  width: "300px",
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
            </Stack>
            <Box sx={{ textAlign: "start", px: "30px" }}>
              <Typography variant="p" color="#fff">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#ff2625" mt="20px">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
