import React from "react";
//@ts-ignore
import Helmet from "react-helmet";
import "./App.css";
import Card from "./components/Card";
import BarChartSection from "./components/BarChartSection";
import PrimaryBtn from "./components/PrimaryBtn";
import PieChartSection from "./components/PieChartSection";

export default class App extends React.Component {
  componentDidMount() {
    
    setTimeout(() => {
      //@ts-ignore
      introJs().setOptions({
        steps: [
          {
            intro: "Welcome to Antler Dashboard",
          },
          {
            intro: "Click Here to add more firm ",
            element: document.querySelector("#create-firm-btn")
          },
          {
            element: document.querySelector("#payroll-summary"),
            intro: "Watch Your Payroll Analyses",
          },
        ],
      }).start();
    }, 3000)
    
  }
  render() {
    return (
      <section className="flex">
        <aside className="w-1/6 bg-white">
          <section className="mt-10">
            <figure className="w-full">
              <p className="text-indigo-600 text-4xl font-extrabold text-center">
                Antler
              </p>
            </figure>
          </section>
          <ul className="side-nav">
            <li>
              <a className="active" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Extension</span>
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </aside>
        <main className="w-5/6 py-8 px-10 bg-[#f4f6fa]">
          <section className="flex justify-end">
            <section className="flex items-center space-x-4">
              <div className="rounded border flex items-center p-1 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-transparent text-gray-500 outline-none text-sm"
                  placeholder="Search People"
                />
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <div className="absolute animate-pulse w-1 h-1 rounded-full top-0 right-0 bg-red-500"></div>
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <div className="absolute animate-pulse w-1 h-1 rounded-full top-0 right-0 bg-red-500"></div>
              </div>
              <figure>
                <img
                  alt="profile"
                  className="rounded-full w-8 h-8 object-cover"
                  src="https://picsum.photos/id/1/200/300"
                />
              </figure>
              <PrimaryBtn id="create-firm-btn" addClasses="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="font-bold text-sm">Create A Firm</p>
              </PrimaryBtn>
            </section>
          </section>
          <section>
            <section>
              <h1 className="text-4xl font-bold">Welcome Obinna!</h1>
              <div className="flex space-x-4 mt-4">
                <p className="text-gray-700">
                  Run Payroll 01/02/2020 to 28/02/2020
                </p>
                <button className="text-red-500 bg-red-100 px-4 text-xs rounded">
                  Run Payroll
                </button>
              </div>
            </section>
            <section className="flex py-8">
              <section className="w-2/3 flex flex-col space-y-4 pr-2">
                <Card>
                  <ul className="flex items-center justify-between">
                    <li className="pr-4">
                      <p className="text-gray-400 text-sm">Payment Date</p>
                      <p>31/05/2020</p>
                    </li>

                    <li className="px-4 border-l">
                      <p className="text-gray-400 text-sm">Total Employee</p>
                      <p>140</p>
                    </li>
                    <li className="px-4 border-l">
                      <p className="text-gray-400 text-sm">Working Days</p>
                      <p>25</p>
                    </li>
                    <li className="px-4 border-l">
                      <p className="text-gray-400 text-sm">Net Pay</p>
                      <p>N3,0000</p>
                    </li>
                    <li>
                      <button className="text-white text-xs bg-blue-700 hover:bg-blue-900  px-4 py-2 rounded">
                        View Details
                      </button>
                    </li>
                  </ul>
                </Card>
                <section id="payroll-summary">
                  <BarChartSection />
                </section>

                <Card>
                  <table className="w-full data-tb">
                    <thead className="rounded">
                      <tr className="text-sm bg-gray-100 rounded-xl text-gray-400">
                        <th>Employee Name</th>
                        <th>ID</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Project</th>
                        <th>Discpline</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr>
                        <td className="flex items-center justify-center space-x-3">
                          <figure>
                            <img
                              className="rounded-full h-6 w-6 object-cover"
                              alt="employee face"
                              src="https://picsum.photos/id/1/200/300"
                            />
                          </figure>
                          <p>Declan Nnadozie</p>
                        </td>
                        <td>
                          <p className="text-center">FT12200D</p>
                        </td>
                        <td>
                          <p className="text-center">Tech</p>
                        </td>
                        <td>
                          <p className="text-center">Developer</p>
                        </td>
                        <td>
                          <p className="text-center">25</p>
                        </td>
                        <td>
                          <p className="text-center">100%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </section>
              <section className="w-1/3 flex flex-col space-y-4 pl-2">
                <Card>
                  <p className="text-sm font-bold">To Do Tasks</p>
                  <section className="flex space-x-3">
                    <figure className="border rounded-full p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </figure>
                    <div>
                      <p className="text-sm font-bold">Typewrite reports</p>
                      <p className="text-xs text-gray-400 font-light">
                        assigned to Declan Nnadozie
                      </p>
                    </div>
                  </section>
                </Card>
                <Card>
                  <section className="flex items-center space-x-4">
                    <figure>
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://picsum.photos/id/1/200/300"
                        alt="profile"
                      />
                    </figure>
                    <section className="flex flex-col space-y-2">
                      <p className="font-bold">Declan Nnadozie</p>
                      <p className="text-sm text-gray-400 font-light">
                        BirthDay Today
                      </p>
                      <PrimaryBtn>Wish Happy BirthDay</PrimaryBtn>
                    </section>
                  </section>
                </Card>
                <PieChartSection />
              </section>
            </section>
          </section>
        </main>
      </section>
    );
  }
}
