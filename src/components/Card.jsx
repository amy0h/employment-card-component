import React from 'react'

const Card = ({ employeeData }) => {

  return (
    <div className='rounded-lg w-[350px]'>
        <div className='capitalize text-gray-800 bg-slate-100 px-5 py-4  rounded-t-lg'>
            The title of the card here
        </div>
        <div className='flex justify-between items-center px-5 py-4 bg-white'>
            <div className='bg-orange-600 text-white text-sm
            uppercase font-bold border-0 rounded-full py-1 px-3'>
                {employeeData.status}
            </div>
            <div className='text-gray-800 text-sm'>
                {employeeData.dateOfBirth}
            </div>
        </div>
        <div className='bg-white text-gray-900 border-y px-5 py-4'>
            <div className='bg-slate-100 border rounded-lg text-sm px-5 py-4 m-3'>
                {employeeData.comment}
            </div>
        </div>
        <div className='bg-slate-100 px-5 py-4  rounded-b-lg'>
            <p className='uppercase text-sm font-bold text-gray-500 tracking-wider'>
                employee
            </p>
            <div className='flex mt-2'>
                <div className='bg-blue-800 text-white font-bold rounded-full
                w-12 h-12 flex justify-center items-center mr-5'>
                    {employeeData.initial}
                </div>
                <div>
                    <div>
                        <p className='text-gray-800'>
                            {employeeData.fullName}
                        </p>
                        <p className='text-gray-500 text-xs uppercase tracking-tight'>
                            {employeeData.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card