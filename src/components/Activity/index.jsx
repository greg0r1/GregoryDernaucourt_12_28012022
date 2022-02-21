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
  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          style={{
            padding: '3px 5px',
            borderRadius: '2px',
            background: 'red',
            margin: 'auto',
            color: '#FFF',
          }}
        >
          <p>{`${payload[0].value} ${payload[0].unit}`}</p>
          <p>{`${payload[1].value} ${payload[1].unit}`} </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%" aspect={600 / 150}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={5}
          stackOffset="expand"
          style={{ padding: '20px', overflow: 'visible', height: 'auto' }}
        >
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{
              transform: 'translate(13%, -5%)',
              color: '#000',
              fontWeight: '500',
            }}
          >
            Activité quotidienne
          </text>
          <XAxis
            axisLine={true}
            tickLine={false}
            tickMargin={10}
            domain={['minData', 'maxData']}
            tickFormatter={(number) => number + 1}
            scale="point"
            padding={{ left: 15, right: 15 }}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            tickCount={3}
            allowDecimals={false}
            allowDataOverflow={false}
            axisLine={false}
            tickLine={false}
            ticks={[65, 70, 75]}
            // @ts-ignore
            padding={{ left: 10, right: 10 }}
            domain={[65, 75]}
            type="number"
            scale="auto"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            yAxisId="left"
            dataKey="calories"
            domain={['auto', 'auto']}
            scale="auto"
            hide
          />
          <Tooltip content={<CustomTooltip payload={[data]} />} />
          <CartesianGrid
            vertical={false}
            strokeDasharray="1"
            style={{ padding: '0', margin: '0' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={6}
            radius={[5, 5, 0, 0]}
            name="Poids (kg)"
            unit={'kg'}
            style={{ margin: '0', padding: '0' }}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={6}
            radius={[5, 5, 0, 0]}
            name="Calories brulées (kCal)"
            unit={'kCal'}
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
