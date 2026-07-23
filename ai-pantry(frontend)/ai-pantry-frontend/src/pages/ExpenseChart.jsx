import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";


function ExpenseChart({expenses}){


    const data = expenses.reduce(
        (result,item)=>{

            const existing =
                result.find(
                    x=>x.name===item.category
                );


            if(existing){

                existing.value += item.amount;

            }
            else{

                result.push({

                    name:item.category,
                    value:item.amount

                });

            }


            return result;


        },[]
    );



    return(

        <div>


            <h2>
                Spending Analysis 📊
            </h2>


            <PieChart
                width={400}
                height={300}
            >

                <Pie

                    data={data}

                    dataKey="value"

                    nameKey="name"

                    outerRadius={100}

                    label

                >

                    {
                        data.map(
                            (entry,index)=>(

                            <Cell key={index}/>

                            )
                        )
                    }


                </Pie>


                <Tooltip/>

                <Legend/>


            </PieChart>


        </div>

    );

}


export default ExpenseChart;