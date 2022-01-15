import React from 'react';
import { Column } from '@ant-design/plots';
import { Button } from 'antd';
import "./workloadGraph.css";

const WorkloadGraph1 = () => {
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
          "day": "30 sep",
          "type": "checked",
          "value": 145
        },
        {
            "day": "30 sep",
            "type": "delivered",
            "value": 115
          },
          {
            "day": "30 sep",
            "type": "recieved",
            "value": 155
          },
          {
            "day": "1 oct",
            "type": "checked",
            "value": 90
          },
          {
              "day": "1 oct",
              "type": "delivered",
              "value": 75
            },
            {
              "day": "1 oct",
              "type": "recieved",
              "value": 120
            },
            {
                "day": "2 oct",
                "type": "checked",
                "value": 90
              },
              {
                  "day": "2 oct",
                  "type": "delivered",
                  "value": 75
                },
                {
                  "day": "2 oct",
                  "type": "recieved",
                  "value": 120
                },
                {
                    "day": "3 oct",
                    "type": "checked",
                    "value": 90
                  },
                  {
                      "day": "3 oct",
                      "type": "delivered",
                      "value": 75
                    },
                    {
                      "day": "3 oct",
                      "type": "recieved",
                      "value": 120
                    },
                    {
                        "day": "4 oct",
                        "type": "checked",
                        "value": 90
                      },
                      {
                          "day": "4 oct",
                          "type": "delivered",
                          "value": 75
                        },
                        {
                          "day": "4 oct",
                          "type": "recieved",
                          "value": 120
                        },
                        {
                            "day": "5 oct",
                            "type": "checked",
                            "value": 90
                          },
                          {
                              "day": "5 oct",
                              "type": "delivered",
                              "value": 75
                            },
                            {
                              "day": "5 oct",
                              "type": "recieved",
                              "value": 120
                            },
                            {
                                "day": "6 oct",
                                "type": "checked",
                                "value": 0
                              },
                              {
                                  "day": "6 oct",
                                  "type": "delivered",
                                  "value": 0
                                },
                                {
                                  "day": "6 oct",
                                  "type": "recieved",
                                  "value": 0
                                },

                                {
                                    "day": "7 oct",
                                    "type": "checked",
                                    "value": 0
                                  },
                                  {
                                      "day": "7 oct",
                                      "type": "delivered",
                                      "value": 0
                                    },
                                    {
                                      "day": "7 oct",
                                      "type": "recieved",
                                      "value": 0
                                    },

                                    {
                                        "day": "8 oct",
                                        "type": "checked",
                                        "value": 0
                                      },
                                      {
                                          "day": "8 oct",
                                          "type": "delivered",
                                          "value": 0
                                        },
                                        {
                                          "day": "8 oct",
                                          "type": "recieved",
                                          "value": 0
                                        },
        
        
    ]
    const config = {
      data,
      xField: 'day',
      yField: 'value',
      seriesField: 'type',
      isGroup: 'false',
      columnStyle: {
        radius: [20, 20, 0, 0],
      },
    };
  
    return (
        <>
        <section className='workload-graph'>
            <div className='workload-graph-details'>
                <div className='workload-items'>
                <Button className='checked'>To be checked </Button>
                <Button className='delivered'>Delivered </Button>
                <Button className='reccieved'>Recieved </Button>
                </div>
                <div className='workload-addfile'>
                <Button>+ Add Notes</Button>
                </div>
            </div>
            <div className='graph'>
                <h3>Workload</h3>
                <Column {...config} />
            </div>
        
        </section>
        
        </>
    );
  };

export default WorkloadGraph1;
