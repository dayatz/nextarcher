import { format } from 'date-fns'
import Card from "~/components/Card";

const data = [{
  title: 'Latihan sore',
  score: 42,
  total: 315,
  date: new Date(),
  location: 'Meninting',

  distance: 70,
  target: 'Mumtaz',

  arrows: 9,
  rounds: 7
}, {
  title: 'Latihan pagi',
  score: 55,
  total: 315,
  date: new Date(),
  location: 'Meninting',

  distance: 40,
  target: 'Mumtaz',

  arrows: 12,
  rounds: 7
}, {
  title: '-',
  score: 200,
  total: 315,
  date: new Date(),
  location: 'Meninting',

  distance: 40,
  target: 'Mumtaz',

  arrows: 10,
  rounds: 3
}]

const accuracyColors = {
  bad: 'red-700',
  good: 'lime-500',
  nice: 'green-700',
  excelent: 'emerald-800'
}

function getBgColorPercent(percentage: number) {
  let code: keyof typeof accuracyColors = 'bad'
  if (percentage >= 70) {
    code = 'excelent'
  } else if (percentage >= 50) {
    code = 'nice'
  } else if (percentage >= 20) {
    code = 'good'
  }
  return accuracyColors[code]
}

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl mb-6">Hasil Latihan</h1>

      <div className='space-y-6'>
        {data.map(d => {
          const percentage = ((d.score / d.total) * 100).toFixed(1)
          const color = getBgColorPercent(Number(percentage))
          return (
            <Card className="p-0 overflow-hidden">
              <div className='h-2 bg-slate-200 w-full'>
                <div className={`h-full bg-${color}`} style={{ width: percentage + '%' }}></div>
              </div>
              <div className="px-4 flex w-full items-center justify-between text-xs border-b border-gray-300 py-2">
                <p className='m-0'>{d.title}</p>
                <p className='m-0 text-gray-500'>{format(d.date, 'dd MMMM yyyy, HH:mm')}</p>
              </div>
              <div className='flex gap-6 px-4'>
                <div className='py-4 pl-2 flex flex-col items-center justify-center'>
                  <p className='mb-0 text-xs text-gray-500'>Akurasi</p>
                  <div className={`mb-0 text-2xl grid place-items-center text-${color}`}>
                    {percentage}%
                  </div>
                  <p className='mb-0 text-xs text-center mt-2'>{d.score} / {d.total}</p>
                </div>
                <div className='p-4 flex-1'>
                  <div className='mt-4 grid grid-cols-2 gap-2'>
                    <div>
                      <p className='m-0 text-gray-500 text-xs'>Arrows</p>
                      <p className='m-0'>{d.arrows}</p>
                    </div>
                    <div>
                      <p className='m-0 text-gray-500 text-xs'>Jarak</p>
                      <p className='m-0'>{d.distance}m</p>
                    </div>
                    <div>
                      <p className='m-0 text-gray-500 text-xs'>Rambahan</p>
                      <p className='m-0'>{d.rounds}</p>
                    </div>
                    <div>
                      <p className='m-0 text-gray-500 text-xs'>Target</p>
                      <p className='m-0'>{d.target}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </>
  )
}
