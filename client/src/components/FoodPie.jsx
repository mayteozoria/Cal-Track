import * as React from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'

const FoodPie = (props) => {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data
        }
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold'
        }
      }}
      {...size}
    />
  )
}

export default FoodPie
