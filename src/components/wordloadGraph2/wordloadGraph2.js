import React from 'react';
import { Column } from '@ant-design/plots';
import { Button } from 'antd';
import { Line } from '@ant-design/plots';
import "./wordloadGraph2.css";
const WorkloadGraph2 = () =>{
    // const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   asyncFetch();
    // }, []);
  
    // const asyncFetch = () => {
    //   fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => {
    //       console.log('fetch data failed', error);
    //     });
    // };
    const data = [
        {
            "date": "30 sep",
            "type": "download",
            "value": 60
          },
          {
            "date": "30 sep",
            "type": "register",
            "value": 35
          },
          {
            "date": "30 sep",
            "type": "bill",
            "value": 15
          },
          {
            "date": "1 oct",
            "type": "download",
            "value": 100
          },
          {
            "date": "1 oct",
            "type": "register",
            "value": 65
          },
          {
            "date": "1 oct",
            "type": "bill",
            "value": 29
          },
          {
            "date": "2 oct",
            "type": "download",
            "value": 72
          },
          {
            "date":"2 oct",
            "type": "register",
            "value": 49
          },
          {
            "date": "2 oct",
            "type": "bill",
            "value": 16
          },
          {
            "date": "3 oct",
            "type": "download",
            "value": 89
          },
          {
            "date":"3 oct",
            "type": "register",
            "value": 74
          },
          {
            "date": "3 oct",
            "type": "bill",
            "value": 31
          },
          {
            "date": "4 oct",
            "type": "download",
            "value": 52
          },
          {
            "date":"4 oct",
            "type": "register",
            "value": 59
          },
          {
            "date": "4 oct",
            "type": "bill",
            "value": 8
          },
          
        
        
    ]
    const config = {
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
          label: {
            // 数值格式化为千分位
            formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
          },
        },
        seriesField: 'type',
        color: ({ type }) => {
          return type === 'register' ? '#F4664A' : type === 'download' ? '#30BF78' : '#FAAD14';
        },
        lineStyle: ({ type }) => {
          if (type === 'register') {
            return {
              lineDash: [4, 4],
              opacity: 1,
            };
          }
    
          return {
            opacity: 0.5,
          };
        },
      };
    return (
        <>
        <section className='workload-graph2'>
            <div className='workload-graph-details2'>
                <div className='workload-items2'>
                <Button className='total-to-be'>Total to be done</Button>
                <Button className='total-done'>Total done </Button>
                <Button className='Unloaded'>Unloaded</Button>
                <Button className='reccieved'>Recieved  </Button>
                </div>
                <div className='workload-addfile2'>
                <Button>+ Add Notes</Button>
                </div>
            </div>
            <div className='graph'>
                <h3>Workload</h3>
                <Line  {...config} />
            </div>
        
        </section>
        
        </>
    );
  };

export default WorkloadGraph2
