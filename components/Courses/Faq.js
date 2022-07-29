import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const faqData = [
    {
      question: "Question number 01 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
    {
      question: "Question number 02 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
    {
      question: "Question number 03 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
    {
      question: "Question number 04 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
    {
      question: "Question number 05 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
    {
      question: "Question number 06 goes in here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A risus tellus diam lectus. Semper enim, lorem nisl, et. Augue morbi lacus, suspendisse enim. Vitae non nam ac ",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] h-full p-2 md:p-8 flex flex-col items-center ">
      <div className="text-2xl md:text-4xl py-4 text-[#231F20] text-center font-bold">
        FAQ
      </div>
      <div className="w-full md:w-2/3">
        {faqData.map((items, index) => (
          <Accordion
            expanded={expanded === `{panel${index + 1}}`}
            onChange={handleChange(`{panel${index + 1}}`)}
            className="text-base font-bold text-[#030303]  text-left bg-[#EAF0ED] shadow-none"
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {items.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               {items.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
