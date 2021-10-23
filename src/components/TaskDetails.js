import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Progress from "@material-tailwind/react/Progress";

export default function TrafficCard() {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Monthly AID Maintenance</h2>
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            style={{ padding: 0 }}
          >
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status ( Click to update)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
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
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Open</p>
                </th>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
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
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p> On hold</p>
                </td>
                <td>
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <p> On hold</p>
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
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
                  <p>Done</p>
                </td>
                <td>
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <p>Link</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <p className="inline-block mr-2 text-xs	">11/11/2021</p>
                  <div className="inline-block">
                    <Button
                      color="red"
                      buttonType="filled"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Overdue
                    </Button>
                  </div>
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <small>
                    Repeats every 1 month on the 31st or last day of the month
                  </small>{" "}
                  <br />
                  <small>
                    Automatically created from Monthly AID Maintenance
                  </small>
                  <br />
                  <small>(due 05/31/2021, 12:00 PM) </small>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-left">
                  Assign To
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-left">
                  Location
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-left">
                  Asset
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <p className="mr-2 text-xs	inline-block">Team A</p>

                  <p className="inline-block ">Mini Box</p>
                  <br />
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <p className="mr-2 text-xs	inline-block">Toa Payoh</p>
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <p className="mr-2 text-xs	inline-block">AID Camera - 21602</p>
                </td>
              </tr>
            </tbody>

            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-left">
                  Categories
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-left">
                  Work Order ID
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left">
                  <div className="inline-block mr-2">
                    <Button
                      color="red"
                      buttonType="filled"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Overdue
                    </Button>
                  </div>

                  <div className="inline-block mr-2">
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
                  </div>
                  <div className="inline-block">
                    <Button
                      color="lightBlue"
                      buttonType="filled"
                      size="sm"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Repeat
                    </Button>
                  </div>
                  <br />
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left">
                  <p>#2</p>
                </td>
              </tr>
            </tbody>
            <small>Created by Mini Box on 05/22/2021, 4:52 PM</small>
            <small> Last updated on 10/05/2021, 11:56 PM</small>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
