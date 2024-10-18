import React from 'react'
import MembershipSelector from '@/components/MembershipSelector';

const membership: React.FC = () => {
  
  return (
    <div>
       <div className='container mx-auto  py-6 '>
      <div className='font-semibold text-center text-xl py-5'>
        OUR MEMBERSHIP PACKAGE
        </div>
        <MembershipSelector/>
        </div>
    </div>
  )
}

export default membership
