import React from "react"

export const Footer = () => {
    return (

        <footer className="bg-[#111] rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://a-portfolio-ten.vercel.app/" className="hover:underline">Vishal™</a>.  All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Apple Tv+ Clone</a>
        </li>
    </ul>
    </div>
</footer>
    )
}
