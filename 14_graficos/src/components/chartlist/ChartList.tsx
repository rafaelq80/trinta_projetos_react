import { useState, useEffect } from "react";
import axios from 'axios';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    AreaChart, Area,
} from 'recharts';

interface ChartData {
    'date': string,
    'value': number
}

function ChartList() {

    const [chartData, updateChartData] = useState<ChartData[]>([])

    useEffect(() => {
        fetchChartData()
    }, [])

    async function fetchChartData() {
        try {
            const request = await axios.get('https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json')
            updateChartData(request.data[1]);
        } catch (error) {
            console.log(error)
        }
    }

    function renderBarChartData(barChartData: any[] | undefined) {
        return (
            <BarChart
                width={800}
                height={400}
                data={barChartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pib" fill="#8884d8" name="PIB da Índia" />
            </BarChart>
        )
    }

    function renderAreaChartData(chartData: any[] | undefined) {
        return (
            <AreaChart
                width={800}
                height={400}
                data={chartData}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="pib" stroke="#8884d8" fill="#8884d8" name="PIB da Índia" />
            </AreaChart>
        )
    }

    function renderChartData() {
        if (chartData.length) {
            const chartGenData = chartData.map((item) => {
                return {
                    'name': item.date,
                    'pib': item.value
                }
            }).reverse();
            return (
                <div className="d-flex flex-column align-items-center mt-4">
                    <div className="my-4">
                        {renderBarChartData(chartGenData)}
                    </div>
                    <div className="my-4">
                        {renderAreaChartData(chartGenData)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="container">
            {renderChartData()}
        </div>
    )
}

export default ChartList