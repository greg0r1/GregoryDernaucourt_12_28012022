//@ts-check

import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

/**
 * Daily activity with a Bar Chart
 *
 * @param {Object} props
 * @param {Object } props.data
 * @returns {React.ReactElement}
 */
function Activity({ data }) {
  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={900}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{
              padding: '20px',
              transform: 'translate(15%, 10%)',
              color: '#000',
              fontWeight: '500',
            }}
          >
            Activité quotidienne
          </text>{' '}
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            tickCount={3}
            allowDecimals={false}
            allowDataOverflow={false}
            axisLine={false}
            tickLine={false}
            scale="auto"
            height={1}
            domain={['dataMin -5', 'dataMax + 5']}
            // @ts-ignore
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            dataKey="calories"
            orientation="left"
            axisLine={true}
            tickLine={true}
            domain={[0, 290]}
            hide={true}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[5, 5, 0, 0]}
            name="Poids (Kg)"
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[5, 5, 0, 0]}
            name="Calories brulées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity

Activity.propType = {
  data: PropTypes.object.isRequired,
}

Activity.defaultProps = {
  data: {},
}
