/* eslint-disable no-unused-vars */
import Desk from "@/components/ManagementDesks/Desk";
import React from "react";
import chairMen from '@/../public/Person/chairMen.png'
const HomePage2 = () =>
{
  const desk1Data = {
    image: chairMen,
    title: "Chairmen's Words",
    name: "Dr. Ibrahim Gaya",
    designation: "Chairman",
    text1: "I was born in 16th September 1942 in Manglore, studied in mumbai, Qualified as B.Sc. DHMS from Mumbai University, Worked in Glaxo as production officer for 25 Vears. Practiced Homeopathy for last 45 years above, have an experience of Running Medical Education Institutes in mumbai, for past 4 decades work medical education & renowned charitable trust, established Nursing Assistant Institute, sewing classes and also managed Dialysis centre for 20 years in Mumbai. Strive for women's Employment & Participation in the society through medical field and education treating patient numbering more than 40,000 with high recovery",
    text2: [
      "I consider the most important factor from human being is self esteem. Self esteem come from respecting each other, care and proper means of earning and righteous way of living.",
      "I strive for self employment in acquiring for legitimate way of spending. I strongly recommend for paramedical course. It brings students from lower middle class to a respectable & dignified living in the society."
    ],
    regards: "When God Guides, He Provides",
  };

  return (
    <div className="text-black min-h-[60vh] scroll-mt-[80px] mt-30">
      {/* Pass everything at once */}
      <div className="px-10 border">
        <Desk {...desk1Data} />
      </div>
    </div>
  );
};

export default HomePage2;
