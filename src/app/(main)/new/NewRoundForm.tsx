'use client';

import { useForm } from 'react-hook-form'
import Button from '~/components/Button';
import Card from '~/components/Card';
import Input from '~/components/Input';

type FormValues = {
  distance: number
  arrows: number
  rounds: number
  maxScores: number
  target: string,
  description: string
}

export default function NewRoundForm() {
  const { handleSubmit, register } = useForm<FormValues>()
  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h2 className='text-gray-400 text-sm'>Info Rambahan</h2>
      <Card className='flex gap-4 p-4'>
        <div className='flex-1'>
          <label className='text-sm'>Jumlah Anak Panah</label>
          <Input autoFocus {...register('arrows')} />
        </div>
        <div className='flex-1'>
          <label className='text-sm'>Jumlah Rambahan</label>
          <Input {...register('rounds')} />
        </div>
      </Card>

      <h2 className='text-gray-400 text-sm mt-4'>Info Target</h2>
      <Card className='grid grid-cols-2 gap-4 p-4'>
        <div className='col-span-1'>
          <label className='text-sm'>Jarak</label>
          <Input {...register('distance')} />
        </div>
        <div className='col-span-1'>
          <label className='text-sm'>Target</label>
          <select className='block w-full' {...register('target')}>
            <option>---</option>
            <option>Ring</option>
            <option>Mumtaz</option>
            <option>Perdana</option>
          </select>
        </div>
        <div className='col-span-2'>
          <label className='text-sm'>Skor maximal per anak panah</label>
          <Input {...register('maxScores')} />
        </div>
      </Card>

      <Button type='submit' variant='outline' className='mt-4 w-full'>Selanjutnya</Button>
    </form>
  )
}
