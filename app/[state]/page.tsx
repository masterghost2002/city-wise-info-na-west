
import LineChartComponent from "@/components/charts/line-chart";
import PieChartComponent from "@/components/charts/pie-chart";
import TableData, { TableHeader } from "@/dummyTableData";
import Table from "@/components/table";
const ExtraDataPage = () => {
    return (
        <div
            className="flex flex-col flex-1 p-5"
        >
            <div className="flex gap-2">
                <div
                    className="flex h-[300px] w-[50%]"
                >
                    <LineChartComponent />
                </div>
                <div
                    className="flex h-[300px] w-[50%]"
                >
                    <PieChartComponent />
                </div>
            </div>
            <Table
                tableHeader={TableHeader}
                tableData={TableData}
            />
        </div>
    )
};
export default ExtraDataPage;