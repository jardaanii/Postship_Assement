import React from "react";
import ShipmentChart from "./ShipmentChart";
import StatCard from "./StatCard";
import { Eye } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className=" h-101 bg-global-orange p-6">
      <div className="ml-16">
        <h1 className="text-4xl text-custom-search-gray font-bold mt-6">
          Instant Dive into Your Performance Metrics
        </h1>

        <div className="flex space-x-4 mt-12">
          {["Lifetime", "Last Week", "Last Month", "Last Year"].map(
            (timeRange) => (
              <button
                key={timeRange}
                className="px-4 py-2 rounded-md h-11 w-36 bg-white text-lg font-semibold  text-custom-search-gray shadow-sm  border-opacity-20 hover:outline outline-2 hover:bg-violet-50 outline-violet-600"
              >
                {timeRange}
              </button>
            )
          )}
          <div>
            <button className=" flex justify-center px-4 py-2  h-11 w-64 rounded-md text-lg font-semibold  text-custom-search-gray bg-white shadow-sm  border-opacity-20 hover:outline outline-2  outline-violet-600">
              Customize Time Line
              <span className=" ml-3 mt-0.5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.75 3.5C7.75 3.08579 7.41421 2.75 7 2.75C6.58579 2.75 6.25 3.08579 6.25 3.5V3.90665C6.00413 3.96421 5.77128 4.04472 5.54754 4.15873C4.84193 4.51825 4.26825 5.09193 3.90873 5.79754C3.68239 6.24175 3.58803 6.7219 3.54336 7.26853C3.49999 7.79944 3.49999 8.45505 3.5 9.26789V10.7321C3.49999 11.5449 3.49999 12.2006 3.54336 12.7315C3.58803 13.2781 3.68239 13.7582 3.90873 14.2025C4.26825 14.9081 4.84193 15.4817 5.54754 15.8413C5.99175 16.0676 6.4719 16.162 7.01853 16.2066C7.54944 16.25 8.20505 16.25 9.01788 16.25L12.4013 16.25C12.7236 16.25 12.943 16.2501 13.1364 16.23C14.9018 16.0472 16.2972 14.6518 16.48 12.8864C16.5001 12.693 16.5 12.4736 16.5 12.1514L16.5 9.26788C16.5 8.45505 16.5 7.79944 16.4566 7.26853C16.412 6.7219 16.3176 6.24175 16.0913 5.79754C15.7317 5.09193 15.1581 4.51825 14.4525 4.15873C14.2287 4.04472 13.9959 3.96421 13.75 3.90665V3.5C13.75 3.08579 13.4142 2.75 13 2.75C12.5858 2.75 12.25 3.08579 12.25 3.5V3.75859C11.8765 3.74999 11.456 3.75 10.9821 3.75H9.0179C8.54396 3.75 8.12348 3.74999 7.75 3.75859V3.5ZM6.22852 5.49524C6.42604 5.3946 6.68681 5.32547 7.14068 5.28838C7.60331 5.25058 8.19755 5.25 9.05 5.25H10.95C11.8025 5.25 12.3967 5.25058 12.8593 5.28838C13.3132 5.32547 13.574 5.3946 13.7715 5.49524C14.1948 5.71095 14.5391 6.05516 14.7548 6.47852C14.8554 6.67604 14.9245 6.9368 14.9616 7.39068C14.9764 7.57123 14.9855 7.77183 14.991 8H5.00895C5.01455 7.77183 5.02363 7.57123 5.03838 7.39068C5.07547 6.9368 5.1446 6.67604 5.24524 6.47852C5.46095 6.05516 5.80516 5.71095 6.22852 5.49524ZM5 9.5V10.7C5 11.5525 5.00058 12.1467 5.03838 12.6093C5.07547 13.0632 5.1446 13.324 5.24524 13.5215C5.46095 13.9448 5.80516 14.289 6.22852 14.5048C6.42604 14.6054 6.68681 14.6745 7.14068 14.7116C7.60331 14.7494 8.19755 14.75 9.05 14.75H12.3557C12.7407 14.75 12.8759 14.749 12.9818 14.738C14.0411 14.6283 14.8783 13.7911 14.988 12.7318C14.999 12.6259 15 12.4907 15 12.1057V9.5H5Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-7 mt-12">
          {/* Shipment Updates with Chart */}
          <div className="col-span-5 p-4 h-100 bg-white rounded-2xl shadow">
            <div className="flex justify-between">
              <h2 className="font-bold text-lg mb-4 text-custom-search-gray">
                Shipment Updates
              </h2>
              <span className="text-lg text-gray-600">Total Orders : 394</span>
            </div>

            <div className="flex  space-x-2 overflow-x-auto whitespace-nowrap">
              <button className="px-3 py-1 h-11 w-44 text-lg font-semibold text-custom-search-gray shadow-sm border-opacity-20 hover:bg-[#ffedcc] bg-gray-200 rounded-md">
                Delivered
              </button>
              <button className="py-1 h-11 w-44 text-lg font-semibold text-custom-search-gray shadow-sm border-opacity-20 hover:bg-[#ffedcc] bg-gray-200 rounded-md">
                Out for delivery
              </button>
              <button className="py-1 h-11 w-44 text-lg font-semibold text-custom-search-gray shadow-sm border-opacity-20 hover:bg-[#ffedcc] bg-gray-200 rounded-md">
                Intransit
              </button>
              <button className="py-1 h-11 w-44 text-lg font-semibold text-custom-search-gray shadow-sm border-opacity-20 hover:bg-[#ffedcc] bg-gray-200 rounded-md">
                Pending
              </button>
              <button className="py-1 h-11 w-44 text-lg font-semibold text-custom-search-gray shadow-sm border-opacity-20 hover:bg-[#ffedcc] bg-gray-200 rounded-md">
                Exception
              </button>
            </div>

            <div className=" flex justify-center">
              <ShipmentChart />
            </div>
            <Legends />
          </div>

          {/* Stat Cards */}
          <div className="col-span-2 mr-4">
            <StatCard
              title="Star Facts about your orders!!!"
              content={[
                "There are 8 shipments that have been out for delivery for more than 3 days.",
                "There are 5 shipments in exception right now",
                "The maximum chargebacks are from Miami.",
              ]}
              icon={
                <span>
                  <svg
                    width="88"
                    height="95"
                    viewBox="0 0 71 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2" filter="url(#filter0_f_6001_709)">
                      <circle cx="39" cy="39" r="35" fill="#FFEBD5" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_6001_709"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect1_foregroundBlur_6001_709"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
              }
              buttonText="Check Orders Page"
            />
          </div>

          {/* Tracking Page Views Vs Orders */}
          <div className="col-span-5 h-100 ml-0.41 ">
            <div className="mr-27 px-10 h-100 rounded-2xl bg-white">
              <div className="  pt-4">
                <div className="font-bold text-xl mb-5 text-custom-search-gray">
                  Tracking Page Views Vs Orders
                </div>
                <p className="font-medium text-xl  mb-5 text-custom-search-gray">
                  Understand user engagement patterns and optimize your tracking
                  page for enhanced customer experiences.
                </p>
              </div>
              <div className="space-y-4 h-84 flex flex-col justify-between mt-12">
                <div className="bg-global-orange-04 p-4 h-40 rounded-lg flex justify-between items-center">
                  <div className="pl-4">
                    <p className="font-bold text-xl  text-custom-search-gray">
                      Orders
                    </p>
                    <p className="text-6xl font-bold text-custom-search-gray">
                      80
                    </p>
                  </div>
                  <span className="mt-6 mr-5">
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.5315 9.8C15.7147 9.8 12.474 12.596 11.9146 16.3716L10.0645 28.8598C9.8884 30.0485 9.79999 31.2486 9.79999 32.4503V37.1C9.79999 42.1258 13.8742 46.2 18.9 46.2H37.1C42.1258 46.2 46.2 42.1258 46.2 37.1V32.4503C46.2 31.2486 46.1116 30.0485 45.9355 28.8598L44.0854 16.3716C43.526 12.596 40.2853 9.8 36.4685 9.8H19.5315ZM16.0693 16.9871C16.3235 15.2709 17.7966 14 19.5315 14H36.4685C38.2034 14 39.6765 15.2709 39.9307 16.9871L41.5623 28H34.6091C33.1025 28 31.7651 28.964 31.2887 30.3932L30.8459 31.7214C30.7507 32.0072 30.4832 32.2 30.1819 32.2H25.8181C25.5168 32.2 25.2493 32.0072 25.154 31.7214L24.7113 30.3932C24.2349 28.964 22.8974 28 21.3909 28H14.4377L16.0693 16.9871ZM14.0015 32.2C14.0005 32.2834 14 32.3668 14 32.4503V37.1C14 39.8062 16.1938 42 18.9 42H37.1C39.8062 42 42 39.8062 42 37.1V32.4503C42 32.3668 41.9995 32.2834 41.9984 32.2H35.1136L34.8304 33.0495C34.1635 35.0504 32.291 36.4 30.1819 36.4H25.8181C23.709 36.4 21.8365 35.0504 21.1696 33.0495L20.8864 32.2H14.0015Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </span>
                </div>
                <div className="bg-global-orange-08  h-40 p-4 rounded-lg flex justify-between items-center">
                  <div className="pl-4">
                    <p className="font-bold text-xl text-custom-search-gray">
                      Tracking Page Views
                    </p>
                    <p className="text-6xl font-bold  text-custom-search-gray">
                      44
                    </p>
                  </div>
                  <Eye className="h-20 w-20 mr-5 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function Legends() {
  return (
    <div className="flex flex-wrap  justify-start mt-1">
      {[
        { name: "Exception", color: "#5E4200" },
        { name: "Intransit", color: "#956F00" },
        { name: "Pending", color: "#E5A500" },
        { name: "Delivered", color: "#FFC879" },
        { name: "Out for delivery", color: "#FFDDB6" },
      ].map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center mr-4 mb-2">
          <div
            className="flex justify-start w-9 h-4 mr-2 rounded-3xl "
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-lg text-custom-search-gray font-semibold">
            {entry.name}
          </span>
        </div>
      ))}
    </div>
  );
}
