// import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import { Upload, message, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const CompleteProcedure = () => {
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <p className="text-xs">Complete Procedure</p>
        <h2 className="text-white text-lg mt-4">
          Automatic Incident Detection - Monitoring System
        </h2>
        <h2 className="text-white text-xs mb-2">Visual Inspection</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full table-fixed bg-transparent border-collapse">
            <thead>
              <tr>
                <th className=" px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  <p className="font-bold">
                    Check that the camera housing window does not have any
                    cracks.
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="lightBlue"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Pass
                  </Button>
                </th>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="orange"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Flag
                  </Button>
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="red"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Failed
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  <small className="text-xs">
                    You can upload a picture/file to show the failure:
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Add pictures/files</p>
                  </Dragger>
                  <Input placeholder="Enter note" className="mt-2" />
                </th>
              </tr>
            </tbody>
          </table>
          <table className="items-center w-full table-fixed bg-transparent border-collapse">
            <thead>
              <tr>
                <th className=" px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  <p className="font-bold">
                    Check that the camera housing window does not have any
                    cracks.
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="lightBlue"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Pass
                  </Button>
                </th>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="orange"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Flag
                  </Button>
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Button
                    color="red"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                  >
                    Failed
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default CompleteProcedure;
