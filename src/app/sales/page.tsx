import { Chart_01 } from "../(components)/chart-01";
import { Chart_02 } from "../(components)/chart-02";
import { Chart_03 } from "../(components)/chart-03";

const Sales = () => {
    return (
        <div className="flex flex-col items-start w-screen p-10">
            <h1>Sales</h1>

            <div className="flex gap-10 items-center">
                <Chart_01 />
                <Chart_02 />
                <Chart_03 />
            </div>
        </div>
    );
}

export default Sales;