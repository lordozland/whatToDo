import React from 'react';

// const styles = {
//     borders: {
//         border: 'solid'
//     }
// }

const NavBar = () => {
    return (
        <div className='bg-black text-white p-7'>
            <ul class="flex">
            <li class="mr-6">
                <a class="hover:text-blue-800" href="/">Active</a>
            </li>
            <li class="mr-6">
                <a class="hover:text-blue-800" href="/">Link</a>
            </li>
            <li class="mr-6">
                <a class="hover:text-blue-800" href="/">Link</a>
            </li>
            <li class="mr-6">
                <a class="hover:text-blue-800" href="/">Disabled</a>
            </li>
            </ul>
        </div>
        
    )
}

export default NavBar