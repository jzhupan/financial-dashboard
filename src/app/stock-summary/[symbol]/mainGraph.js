import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField'


export default class Example extends PureComponent {

  render() {  
    return this.props.data ? (

    this.props.data.length != 0 ?
    (<div style={{ height: this.props.componentHeight, width: this.componentWidth }} sx={{ display: 'inline-flex' }}>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={this.props.width}
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
    ) : (
      <div style={{ height: this.props.componentHeight, width: this.componentWidth , marginTop: '-35px' }} sx={{ display: 'inline-flex' }}>
          <ResponsiveContainer width="100%" height="100%" style={{border: '1px dashed'}}>
          <img src={`https://placehold.co/300x170?text=Graph+Not+Available`} />
          </ResponsiveContainer>
          </div>
    )
    
    ) : (
      <>
      <Skeleton variant="rectangular" width={this.width} height={292} />
      <br />    
      </>
    );
  }
}
