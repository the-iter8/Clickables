import React from "react";
import { Typography } from "@mui/material";
import { MdOutlineBookmarks } from "react-icons/md";

export default function Header() {
  return (
    <div className="header">
      <Typography variant="h2" align="center" sx={{ mt: 10 }}>
        BOOKMARKLETS <MdOutlineBookmarks size={45} />
      </Typography>
      <Typography variant="h6" align="center">
        Code snippets to make your life just a little bit easier :)
      </Typography>
      
    </div>
  );
}
