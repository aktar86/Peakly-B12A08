import React from "react";
import { useParams } from "react-router";
import useAppsData from "../../Hooks/useAppData";
import DownloadIcon from "../../assets/cloud-download.png";
import StarIcon from "../../assets/star.png";
import ReviewIcon from "../../assets/review.png";
import ChartData from "../ChartData/ChartData";



const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useAppsData();
  const appData = apps.find((a) => a.id === Number(id));
  //   console.log(appData);
  if (!appData) {
    return (
      <p className="flex justify-center items-center min-h-screen">
        Loading...
      </p>
    );
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    ratings,
  } = appData;
  //   console.log(title);
  //   console.log(ratings);

  const barChartData = ratings;
//   console.log(barChartData);

  return (
    <div className="lg:px-25 pt-20">
      {/* app details card */}
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-5">
        <div>
          <img className="h-64 w-86 object-cover" src={image} alt="" />
        </div>
        <div className="flex-1">
          <div className="border-b-3 pb-2 border-gray-200 max-w-full">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className=" flex flex-col lg:flex-row gap-10 mt-5">
            <div className="space-y-1">
              <img src={DownloadIcon} alt="" />
              <p>Downloads</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {downloads}
              </h1>
            </div>
            <div className="space-y-1">
              <img src={StarIcon} alt="" />
              <p>Average Ratings</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-1">
              <img src={ReviewIcon} alt="" />
              <p>Total Reviews</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {reviews}
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <button
              onClick={""}
              className="py-2 px-5 bg-[#00D390] text-white text-xl rounded-sm cursor-pointer"
            >
              Install Now ({size}) MB
            </button>
          </div>
        </div>
      </div>

      {/* recharts Section */}

    <ChartData barChartData={barChartData}></ChartData>

      {/* description */}
      <div className="mt-10">
        <h3 className="font-bold">Description</h3>
        <p>{description}</p>
        <p className="mb-10">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured.
          <br />
          <br />
          The built-in analytics show not only how much time you’ve worked but
          also which tasks consumed the most energy. This allows you to reflect
          on your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          <br />
          <br />
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
