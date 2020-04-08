import React from 'react'
import { BarChart } from '../components/BarChart'

export class GraphData {  
    constructor(public data: Array<any> ) {}

    // groupCategories(){ 
    // }

    getBarChart(){
        return <BarChart chartHeight={300} chartWidth={500} data={...this.data} />
    }
  
  };
  