import React, { createRef } from "react";
import { PureComponent } from "react";
import Card from "./Card";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class PieChartSection extends PureComponent {
  private nodeRef: any;
  state = {
      width: 0
  }
  constructor(props: any) {
    super(props);
    this.nodeRef = createRef();
  }

  componentDidMount() {
      this.setState({
          width: this.nodeRef.current.offsetWidth
      })
  }

  onPieEnter() {
      
  }
  render() {
    return (
      <Card>
        <p ref={this.nodeRef}>Monthly Summary</p>
        <section>
          <PieChart width={this.state.width} height={300} onMouseEnter={this.onPieEnter}>
          <Legend verticalAlign="top" height={36}/>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              nameKey="name"
              dataKey="value"
              label
              legendType="rect"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            
          </PieChart>
        </section>
      </Card>
    );
  }
}
