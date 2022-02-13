//@ts-check

import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

function AverageSessions({ data }) {
  function CustomToolTip({ active, payload }) {
    if (active) {
      return (
        <div
          style={{
            padding: '3px 10px',
            borderRadius: '2px',
            background: '#FFF',
            margin: 'auto',
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      )
    }
    return null
  }

  const renderLegend = () => {
    return (
      <div
        style={{
          color: '#FFF',
          padding: '10% 30% 0 5%',
          background: 'red',
          opacity: '0.5',
        }}
      >
        <p style={{ fontSize: '1.1rem', fontWeight: 'bolder' }}>
          Durée moyenne des sessions
        </p>
      </div>
    )
  }

  return (
    <div className="averageSessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorLine" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset={`${0}%`} stopColor="red" />
              <stop offset={`${100}%`} stopColor="#FFF" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            height={30}
            tick={{ fill: '#FFF', opacity: 0.5 }}
            padding={{ left: 10, right: 10 }}
            tickFormatter={(day) => {
              const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
              return `${weekday[day - 1]}`
            }}
          />
          <Tooltip
            content={<CustomToolTip active={undefined} payload={undefined} />}
            cursor={{ stroke: '#FFF', strokeWidth: 2 }}
          />
          <Legend verticalAlign="top" align="left" content={renderLegend} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ fill: '#FFF' }}
            strokeWidth={2}
            stroke="url(#colorLine)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions
