import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Cell
} from "recharts";


function ExpenseChart({ expenses }) {


    const data = expenses.reduce(
        (result, expense) => {

            const existing =
                result.find(
                    item => item.name === expense.category
                );


            if (existing) {

                existing.value += expense.amount;

            } 
            else {

                result.push({

                    name: expense.category,

                    value: expense.amount

                });

            }


            return result;

        },
        []
    );



    return (

        <div>


            <h2>
                Expense Analysis 📊
            </h2>



            <PieChart
                width={400}
                height={300}
            >


                <Pie

                    data={data}

                    dataKey="value"

                    nameKey="name"

                    outerRadius={120}

                    label

                >


                    {
                        data.map(
                            (item, index) => (

                                <Cell
                                    key={index}
                                />

                            )
                        )
                    }


                </Pie>


                <Tooltip />


                <Legend />


            </PieChart>


        </div>

    );

}



export default ExpenseChart;