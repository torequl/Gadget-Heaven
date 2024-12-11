import { BarChart } from "@mui/x-charts";

const Statistics = () => {
    return (
        <div className="w-10/12 mx-auto my-14 p-5 border rounded-lg">
            <BarChart className="max-w-full"
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
            />
        </div>
    );
};

export default Statistics;