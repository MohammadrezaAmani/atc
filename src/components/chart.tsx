import React from 'react'
import { Bar } from '@nivo/bar'

export function Chart () {
  return (
    <div className='h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96'>
      <Bar
        animate={true}
        width={800}
        height={400}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        data={[
          {
            league: 'leauge1',
            Mobina: 170,
            MobinaColor: 'hsl(199, 70%, 50%)',
            Mohammadreza: 190,
            MohammadrezaColor: 'hsl(199, 70%, 50%)',
            Ali: 157,
            AliColor: 'hsl(199, 70%, 50%)',
            Hossein: 168,
            HosseinColor: 'hsl(199, 70%, 50%)',
            Mehrpooya: 55,
            MehrpooyaColor: 'hsl(199, 70%, 50%)',
            Golsa: 130,
            GolsaColor: 'hsl(199, 70%, 50%)'
          },
          {
            league: 'leauge2',

            Mobina: 198,
            MobinaColor: 'hsl(199, 70%, 50%)',
            Mohammadreza: 173,
            MohammadrezaColor: 'hsl(199, 70%, 50%)',
            Ali: 113,
            AliColor: 'hsl(199, 70%, 50%)',
            Hossein: 132,
            HosseinColor: 'hsl(199, 70%, 50%)',
            Mehrpooya: 198,
            MehrpooyaColor: 'hsl(199, 70%, 50%)',
            Golsa: 139,
            GolsaColor: 'hsl(199, 70%, 50%)'
          },
          {
            league: 'leauge3',

            Mobina: 140,
            MobinaColor: 'hsl(199, 70%, 50%)',
            Mohammadreza: 138,
            MohammadrezaColor: 'hsl(199, 70%, 50%)',
            Ali: 116,
            AliColor: 'hsl(199, 70%, 50%)',
            Hossein: 60,
            HosseinColor: 'hsl(199, 70%, 50%)',
            Mehrpooya: 152,
            MehrpooyaColor: 'hsl(199, 70%, 50%)',
            Golsa: 110,
            GolsaColor: 'hsl(199, 70%, 50%)'
          }
        ]}
        keys={[
          'Mobina',
          'Mohammadreza',
          'Ali',
          'Hossein',
          'Mehrpooya',
          'Golsa'
        ]}
        indexBy='league'
        groupMode='grouped'
        layout='vertical'
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        colorBy='id'
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 2,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'Hossein'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'Golsa'
            },
            id: 'lines'
          }
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'league',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'score',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        enableLabel={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      />
    </div>
  )
}
