//@ts-check

import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
  PolarRadiusAxis,
} from 'recharts'

/**
 * Type of activity in a radar chart
 *
 * @param {Object} props
 * @param {Object} props.data
 * @param {Object} props.kind
 * @returns {React.ReactElement}
 */
function Performance({ data, kind }) {
  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="65%"
          cx="52%"
          cy="52%"
          data={data}
          style={{ background: '#282D30' }}
          startAngle={390}
          endAngle={30}
        >
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(kindNumber) => {
              return (
                typeof kindNumber === 'number' &&
                kind[kindNumber] &&
                `${kind[kindNumber].substring(0, 1).toUpperCase()}${kind[
                  kindNumber
                ].substring(1)}`
              )
            }}
            stroke="#FFF"
            tickLine={false}
          />
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0101b3"
            fillOpacity={0.6}
            width={100}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance

Performance.propType = {
  data: PropTypes.object.isRequired,
  kind: PropTypes.object.isRequired,
}
