import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Table } from "antd";
import { Breadcrumb } from "antd";

export default function UsersList() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.fullname.length - b.fullname.length,
      sortDirections: ["descend"],
    },
    {
      title: "Administrator",
      dataIndex: "administrator",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Members",
      dataIndex: "members",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Team A",
      administrator: "Mini Box",
      members: "3 members",
    },
    {
      key: "2",
      name: "Team F",
      administrator: "CCTV Corp",
      members: "6 members",
    },
    {
      key: "3",
      name: "Team B",
      administrator: "Techno Build",
      members: "5 members",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
