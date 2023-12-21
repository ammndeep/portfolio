import React from "react";

const Education = () => {
  const educationData = [
    {
      qualification: "Bachelor in Computer Application",
      board: "Punjabi University,Patiala",
      percentage: "80%",
    },
    {
      qualification: "Intermediate",
      board: "PSEB (Punjab School Education Board)",
      percentage: "84%",
    },
    {
      qualification: "High School",
      board: "PSEB (Punjab School Education Board)",
      percentage: "76%",
    },
  ];
  return (
    <>
      <div className="h-fit px-10 py-10">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl text-blue-600 font-bold ">
            Education <br /> <span className="text-black">Qualifications</span>
          </h1>
          <p className="py-5 text-gray-700 bg-green-100 px-5 rounded-xl my-7 shadow-xl">
            "My qualifications and skills are my assets. They reflect my hard work, dedication, and passion. They enable me to achieve my goals and make a difference.
            "
          </p>
        </div>

        <div className="p-5 bg-slate-100  rounded-xl shadow-lg shadow-gray-400 ">
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="border-b-2">
                <tr className="">
                  <th className="w-18 p-3 text-xl font-semibold tracking-wide text-left">
                    Qualification
                  </th>
                  <th className="p-3 text-xl font-semibold tracking-wide text-left">
                    Board
                  </th>
                  <th className="w-10 p-3 text-xl font-semibold tracking-wide text-left ">
                    Percentage(%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationData.map((data, index) => (
                  <tr key={index}>
                    <td className="border-b-2 p-3 text-lg font-normal text-blue-800">
                      {data.qualification}
                    </td>
                    <td className=" border-b-2 p-3 text-lg font-normal text-red-500">
                      {data.board}
                    </td>
                    <td className=" border-b-2 p-3 text-lg font-normal text-green-800">
                      {data.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
