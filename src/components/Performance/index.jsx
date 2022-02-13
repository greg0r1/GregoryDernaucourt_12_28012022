//@ts-check

import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
  PolarRadiusAxis,
} from 'recharts'

/**
 *
 *
 * @params {array} { data, kind }
 * @returns
 */
function Performance({ data, kind }) {
  return (
    <div className="performance" style={{ width: 300 }}>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          cx="50%"
          cy="50%"
          data={data}
          style={{ width: '0', background: '#282D30' }}
        >
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(kindNumber) => {
              return `${kind[kindNumber]}`
            }}
            stroke="#FFF"
            tickLine={false}
          />
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis axisLine={false} tick={false} tickCount={5} />
          <Radar
            name=""
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0101b3"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
