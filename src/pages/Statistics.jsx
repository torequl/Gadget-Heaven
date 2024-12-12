import { BarChart } from "@mui/x-charts";
import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <>
            <Helmet>
                <title>Statistics - Gadget Shop</title>
            </Helmet>
            <div className="w-10/12 flex place-items-center mx-auto my-14 p-5 border rounded-lg">
                <BarChart className="max-w-full"
                    xAxis={[{ scaleType: 'band', data: ['iPhone', 'Laptop', 'Phones', 'MacBook'] }]}
                    series={[
                        { data: [4, 3, 5, 3] },
                        { data: [1, 6, 3, 4] },
                    ]}
                    width={600}
                    height={300}
                />
            </div>
        </>
    );
};

export default Statistics;