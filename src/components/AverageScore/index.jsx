//@ts-check

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  Label,
} from 'recharts'

/**
 *
 *
 * @params {array} { data }
 * @returns {React.ReactElement}
 */
function AverageScore({ data }) {
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  }

  const renderLegend = (props) => {
    const { payload } = props
    return (
      <div>
        <div className="radialBarLegend">
          <span>{payload[0].payload.score * 100}%</span>
          <p>de votre objectif</p>
        </div>
      </div>
    )
  }

  return (
    <div className="averageScore">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={200}
          height={200}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={360}
          // @ts-ignore
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            // @ts-ignore
            minAngle={300}
            background={{ fill: '#FBFBFB' }}
            clockWise
            dataKey="score"
            cornerRadius={10}
            fill="red"
          />
          <Label
            value="Pages of my website"
            offset={0}
            position="insideBottom"
          />
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{
              padding: '20px',
              transform: 'translate(10%, 10%)',
              color: '#000',
              fontWeight: '500',
            }}
          >
            Score
          </text>
          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageScore
