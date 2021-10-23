import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import Button from "@material-tailwind/react/Button";

import { Avatar } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AssetsDetails() {
  const [user, setUser] = useState("TA");
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const QRCode = require("qrcode.react");
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">AID Camera - 21602</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table class="table-auto w-full text-left table-fixed">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="px-2 align-middle border-b border-solid border-gray-200 py-6 text-sm whitespace-nowrap font-light text-left">
                <td className="py-4">21602</td>
                <td className="py-4">CCTV 2000</td>
                <td className="py-4">Panasonic</td>
                <td className="py-4">2018</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="pt-4">Team in Charge</th>
                <th className="pt-4">QR/Bar code</th>
              </tr>
            </thead>
            <tbody>
              <tr className="px-2 align-middle border-b border-solid border-gray-200 py-6 text-sm whitespace-nowrap font-light text-left">
                <td className="py-4">
                  {" "}
                  <Avatar
                    style={{
                      backgroundColor: "lightBlue",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    {user}
                  </Avatar>
                  <small className="inline pl-4">Team A</small>
                </td>
                <td className="py-4">
                  <p className="mb-4"> 39LXY58A9DH5L </p>
                  <QRCode value="http://facebook.github.io/react/" />
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="pt-4">Asset Types</th>
                <th className="pt-4">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr className="px-2 align-middle border-b border-solid border-gray-200 py-6 text-sm whitespace-nowrap font-light text-left">
                <td className="py-4">
                  {" "}
                  <Avatar
                    style={{
                      backgroundColor: "lightBlue",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    {user}
                  </Avatar>
                  <small className="inline pl-4">Team A</small>
                </td>
                <td className="py-4">
                  <div className="inline-block pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                  </div>
                  <div className="inline-block">
                    <div className="">
                      <small className="">At Toa Payoh</small> <br />
                      <small className="">Parent: Central Region</small>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <small>Created By Mini Box on 05/22/2021, 4:29 PM</small> <br />
          <br />
          <small>Last updated By Mini Box on 05/22/2021, 4:31 PM</small>
          <div>
            <div className="mt-6">
              <small className="inline float-left font-bold	text-base">
                Work Order History
              </small>
              <small className="inline float-right font-bold pb-8 text-base">
                Last 4 Weeks
              </small>
            </div>

            <div className="w-full h-full">
              <div className="w-full h-96">
                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      className="pt-8"
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 70,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="mt-16 ml-6 mr-6">
              <div className="inline float-left ">
                <small className="font-bold"> Monthly AID Maintenance</small>{" "}
                <br />
                <div className="my-3">
                  <small>Requested by Mini Box</small>
                </div>
                <div className="text-green-500	">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="inline float-right  pb-8 text-right	">
                <small>
                  <Avatar
                    style={{
                      backgroundColor: "lightBlue",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    {user}
                  </Avatar>
                </small>{" "}
                <br />
                <small>#1</small>
                <small>
                  {" "}
                  <Button
                    color="red"
                    buttonType="filled"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    High
                  </Button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
