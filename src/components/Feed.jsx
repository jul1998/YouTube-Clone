import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
      setVideos(response.items);
    };
    fetchVideos();
  }, [selectedCategory]);



  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        >

        </Sidebar>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>

          Copyright © 2022 
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>

      <Typography variant="h4" fontWeight="bold" mb={2} >
      {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
      </Typography>


      <Videos videos={videos}>
      </Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
