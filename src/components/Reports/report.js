import "./report.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AiOutlinePlus } from "react-icons/ai";

const ReportCard = () => {
  const options = {
    chart: {
      type: "area",
      backgroundColor: null,
      // width: 300,
      height: 155,
    },
    title: {
      text: "",
    },
    colors: [
      {
        linearGradient: [0, "rgba(46, 29, 29, 1) "],
        stops: [
          [27, "rgba(255, 140, 31, 1)"],
          [100, "rgba(237, 66, 9, 1)"],
        ],
      },
    ],
    // colors: [
    //   "linear-gradient(285deg, rgba(46, 29, 29, 1) 0%, rgba(255, 140, 31, 1) 27%, rgba(237, 66, 9, 1) 100%)",
    // ],
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    legend: {
      enabled: false,
    },
  };
  return (
    <div className='card-container bg-zinc-900 rounded-2xl shadow-2xl '>
      <div className='flex items-center justify-between'>
        <h1 className='title'>Reports</h1>
        <AiOutlinePlus className='icon plus-icon' />
      </div>
      <div className=' mt-5'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default ReportCard;
