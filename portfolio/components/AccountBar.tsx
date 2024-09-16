import React from 'react'
import MagicButton from './MagicButton'
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import Link from 'next/link';
const AccountBar = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:space-y-0 pt-10 space-y-3 justify-around w-full'>
        <Link href="https://github.com/dhirendrasingh25">
            <MagicButton
            title="View Github"
            icon={<FaGithub/>}
            position="left"
            />
        </Link>
        <Link href="https://leetcode.com/u/dhirendrashersingh/">
            <MagicButton
            title="View LeetCode"
            icon={<SiLeetcode/>}
            position="left"
            />
        </Link>
        <Link href="https://www.codechef.com/users/dhirendra2503">
            <MagicButton
            title="View CodeChef"
            icon={< SiCodechef/>}
            position="left"
            />
        </Link>
    </div>
  )
}

export default AccountBar