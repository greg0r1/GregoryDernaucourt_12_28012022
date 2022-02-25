//@ts-check

import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

/**
 * Average sessions with a Line Chart
 *
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactElement}
 */
function AverageSessions({ data }) {
  function CustomToolTip({ active, payload }) {
    if (active) {
      return (
        <div
          style={{
            padding: '3px 5px',
            borderRadius: '2px',
            background: '#FFF',
            margin: 'auto',
          }}
        >
          <p style={{ fontSize: '10px' }}>{payload[0].value} min</p>
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
          padding: '0 5%',
          opacity: '0.5',
        }}
      >
        <p style={{ fontSize: '.9rem', fontWeight: 'bolder' }}>
          Durée moyenne des sessions
        </p>
      </div>
    )
  }

  return (
    <div className="averageSessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector('.averageSessions')
              let windowWidth = div.clientWidth
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              // @ts-ignore
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        >
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
            tickSize={12}
            padding={{ left: 10, right: 10 }}
            tickFormatter={(day) => {
              const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
              return `${weekday[day - 1]}`
            }}
            allowDataOverflow={false}
          />
          <Tooltip
            content={<CustomToolTip active={true} payload={data} />}
            cursor={false}
          />
          <Legend verticalAlign="top" align="left" content={renderLegend} />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ fill: '#FFF' }}
            strokeWidth={2}
            stroke="url(#colorLine)"
            overflow="hidden"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions

AverageSessions.propType = {
  data: PropTypes.object.isRequired,
}

AverageSessions.defaultProps = {
  data: {},
}
