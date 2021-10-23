import StatusCard from "components/StatusCard";
// import ChartLine from "components/ChartLine";
import TaskStatus from "components/TaskStatus";
import ChartBar from "components/ChartBar";
import PageVisitsCard from "components/PageVisitsCard";
import CompleteProcedure from "components/CompleteProcedure";
import TrafficCard from "components/TrafficCard";
import TaskDetails from "components/TaskDetails";

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-2 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 pr-2 mb-14">
              {/* <ChartLine /> */}
              <TaskStatus />
            </div>
            <div className="xl:col-start-4 xl:col-end-12  mb-14">
              {/* <ChartBar /> */}
              <TaskDetails />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          {/* <div className="grid grid-cols-1 xl:grid-cols-5"> */}
          <div className="grid grid-cols-6 gap-4">
            {/* <div className="xl:col-start-4 xl:col-end-12 px-4 mb-14"> */}
            <div className="col-start-2 col-span-4 px-4 mb-14">
              <CompleteProcedure />
            </div>
            {/* <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <TrafficCard />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}