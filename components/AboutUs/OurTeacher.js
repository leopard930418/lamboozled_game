import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function OurTeacher() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  const teacherData = [
    {
      imgsrc: "/images/teacher1.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
    {
      imgsrc: "/images/teacher2.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
    {
      imgsrc: "/images/teacher1.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
    {
      imgsrc: "/images/teacher2.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
    {
      imgsrc: "/images/teacher1.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
    {
      imgsrc: "/images/teacher2.svg",
      teacherName: "Jomos Dysan",
      description: "You Title Here",
    },
  ];
  return (
    <div className="p-2 md:p-20">
      <div className="text-xl md:text-2xl text-[#D1222A] text-center py-4">
        Our Teacher
      </div>
      <div className="text-2xl md:text-4xl text-[#030303] font-bold text-center pt-4 pb-8">
        Meet Our Teacher
      </div>
      <div>
        <Grid container spacing={6}>
          {teacherData.map((items, index) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <TeacherCard
                imgsrc={items.imgsrc}
                teacherName={items.teacherName}
                description={items.description}
                loading
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
