import React from 'react';

const SelectedStack = () => {
    return (
        <div className=''>
            <h2 className='text-lg font-bold text-[#0F172A]'>Your Stack</h2>
            <p className='text-[#94A3B8]'>No technologies selected yet.</p>
            <div className='px-10 py-6 border-2 border-dashed mt-4 mb-4 rounded-xl border-gray-300 text-[#94A3B8]'>
                <p>Your stack is empty.</p>
            </div>
        </div>
    );
};

export default SelectedStack;