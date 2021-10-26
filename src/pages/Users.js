import React, { useState } from "react";
import UsersList from "components/UsersList";
import TeamsList from "components/TeamsList";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Breadcrumb } from "antd";

export default function Users() {
  const [usersList, IsUserList] = useState(true);
  const handleUsers = () => {
    console.log("hello");
    IsUserList(true);
  };
  const handleTeams = () => {
    console.log("hi");
    IsUserList(false);
  };
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <Card>
              <CardHeader color="purple" contentPosition="left">
                <Breadcrumb>
                  <Breadcrumb.Item className="text-white text-lg">
                    <a onClick={handleUsers}> Userss </a>
                  </Breadcrumb.Item>

                  <Breadcrumb.Item className="text-white text-lg">
                    <a onClick={handleTeams}> Teams </a>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </CardHeader>
              <CardBody>{usersList ? <UsersList /> : <TeamsList />}</CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
