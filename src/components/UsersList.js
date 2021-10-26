import { Table } from "antd";

export default function UsersList() {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      sorter: (a, b) => a.fullname.length - b.fullname.length,
      sortDirections: ["descend"],
    },
    {
      title: "Role",
      dataIndex: "role",
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
      title: "Teams",
      dataIndex: "teams",
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
      title: "Last Visit",
      dataIndex: "last_visit",
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
      fullname: "Sohn Brown",
      role: "Full User",
      teams: "Team B",
      last_visit: "10/03/11",
    },
    {
      key: "2",
      fullname: "Jim Green",
      role: "Adminstration",
      teams: "Team A",
      last_visit: "10/03/11",
    },
    {
      key: "3",
      fullname: "Joe Black",
      role: "Adminstration",
      teams: "Team B",
      last_visit: "10/03/11",
    },
    {
      key: "4",
      fullname: "Jim Red",
      role: "Adminstration",
      teams: "Team A",
      last_visit: "10/03/11",
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
