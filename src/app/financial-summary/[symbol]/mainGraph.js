import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {


  render() {
    return (
        <div style={{ height: this.props.componentHeight, width: this.componentWidth }}>
    <ResponsiveContainer width="30%" height="60%">
        <AreaChart
          width={this.props.width}
          height={this.props.height}
          data={this.props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 40
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={330} reversed={true} hide={true}/>
          <YAxis type="number" domain={['auto', 'auto']}  />
          <Tooltip />
          <Area type="monotone" dataKey="close" stroke="#50C878" fill="#50C878" />
        </AreaChart>
      </ResponsiveContainer>


        </div>
      
    );
  }
}
