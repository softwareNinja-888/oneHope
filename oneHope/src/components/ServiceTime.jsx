import { useState } from "react";
import map from '/map1.png'

export function ServiceTime(){

    const serviceTimes = [
      { day: "Monday", time: "10:00 AM", type: "Worship" },
      { day: "Tuesday", time: "6:00 PM", type: "Small Group" },
      { day: "Wednesday", time: "7:00 PM", type: "Bible Study" },
      { day: "Thursday", time: "6:30 PM", type: "Youth Group" },
      { day: "Friday", time: "7:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "5:00 PM", type: "Community Outreach" },
      { day: "Sunday", time: "9:00 AM", type: "Main Service" },
     ]

    return (
      <>
        <div id="services" className="py-20 px-20 flex flex-col gap-10">

          <div className="text-3xl font-poppins">
            Service Times & Location
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  rounded-xl shadow-lg max-w-screen">
            {/* Map Section */}
            <div className="w-full h-full">
              <img
                className="w-full h-full rounded-lg"
                src={map}
                loading="lazy"
              />
            </div>

            {/* Timetable Section */}
            <div className="flex justify-center ">
              <div className="border rounded-lg p-4 bg-gray-50 w-full">
                {serviceTimes.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between p-2 border-b last:border-none"
                  >
                    <span className="flex-1 font-poppins">{service.day}</span>
                    <span className="flex-1 font-inter">{service.time}</span>
                    <span className="flex-1 text-gray-600 font-roboto">{service.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}