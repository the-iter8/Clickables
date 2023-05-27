import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Paper from "@mui/material/Paper";

import { MdLabelImportantOutline } from "react-icons/md";
import SnackBar from "./Sub/SnackBar";
import data from "../data";

export default function SimpleAccordion() {
  const codes = data.codes;
  return (
    <Container sx={{ width: "75%", mt: 4 }}>
      {codes.map((item) => {
        const { id, code, title, desc, actualCode } = item;
        return (
          <Accordion key={id} size='large' color='inherit' sx={{ background: "#774360", color: "#E7AB79", my: 1 }}>
            <AccordionSummary
              id='panel1a-header'
              aria-controls='panel1a-content'
              sx={{ borderBottom: 2 }}
              expandIcon={<MdLabelImportantOutline />}
            >
              <Typography variant='h5'>{title}</Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                gap: "2em",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant='h5' gutterBottom sx={{ alignSelf: "flex-start" }}>
                {desc}
              </Typography>

              <Paper
                elevation={10}
                sx={{
                  p: 4,
                  position: "relative",
                  background: "#532f4c",
                  color: "#E7AB79",
                }}
              >
                <SnackBar
                  code={`${actualCode || code}`}
                  sx={{ wordBreak: "break-all", lineBreak: "anywhere" }}
                />
                <pre>javascript:{code}</pre>
              </Paper>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
