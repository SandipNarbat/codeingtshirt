import React from 'react'
import Image from 'next/image'
import {AiOutlineShoppingCart,AiFillPlusCircle} from "react-icons/ai"
import Link from 'next/link'
import {useRef} from 'react';
const Navbar = () => {
    const toggleCart=()=>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add("translate-x-0")
        }
        else if (!ref.current.classList.contains('translate-x-full '))
        {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add("translate-x-full")
        }
    }
    const  ref= useRef()
  return (
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-md">
  <div class="flex items-center flex-shrink-0 text-white ml-8">
    <Link href={'/'}> <Image src="/pinklogo.jpg" width={100} height={50} className="m-5"></Image></Link>
  </div>
  
  <div class=" flex-grow lg:flex lg:items-center lg:w-auto ">
    <div class=" flex items-center justify-center flex-col md:flex-row ext-sm lg:flex-grow" >
      <a href={"/tshirts"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold   hover:text-white mr-16 text-2xl">
        Tshirts
      </a>
      <a href={"/mugs"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold  hover:text-white mr-16 text-2xl">
        Mugs</a>
      <a href={"/hoodie"} class="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-white text-2xl">
        Hoddie
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded  text-white border-white hover:border-transparent hover:text-white-500 hover:bg-gray-400 mt-4 lg:mt-0 mr-4"><AiOutlineShoppingCart className='text-4xl 'onClick={toggleCart}/></a>
    </div>
  </div>
  
</nav>
<div>
  <div ref={ref} className="flex flex-no-wrap flex-col max-w-3xl p-6 space-y-4 sm:p-10  dark:text-gray-100 absolute top-0 right-0 bg-purple-300 transform transition-transform translate-x-full h-full ">
	<h2 class="text-xl font-semibold">Your cart</h2>
	<ul class="flex flex-col divide-y divide-gray-700">
		<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div class="flex w-full space-x-2 sm:space-x-4">
				<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="/logo.jpg" alt="Polaroid camera"/>
				<div class="flex flex-col justify-between w-full pb-4">
					<div class="flex justify-between w-full pb-2 space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold leading-snug sm:pr-8">Developer Tshirts</h3>
							<p class="text-sm dark:text-gray-400">Classic</p>
						</div>
						<div class="text-right">
							<p class="text-lg font-semibold">59.99€</p>
							<p class="text-sm line-through dark:text-gray-600">75.50€</p>
						</div>
					</div>
					<div class="flex text-sm divide-x">
						<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span className='font-bold'>Remove</span>
						</button>
						<button type="button" class="flex items-center px-2 py-1 space-x-1">
						
							<span><AiFillPlusCircle className='text-xl' /> </span>
                            <span className='ml-5 font-bold'>Add</span>
						</button>
					</div>
				</div>
			</div>
		</li>
		<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div class="flex w-full space-x-2 sm:space-x-4">
				<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" alt="Replica headphones"/>
				<div class="flex flex-col justify-between w-full pb-4">
					<div class="flex justify-between w-full pb-2 space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold leading-snug sm:pr-8">White Apple Tshirts</h3>
							<p class="text-sm dark:text-gray-400">White</p>
						</div>
						<div class="text-right">
							<p class="text-lg font-semibold">99.95€</p>
							<p class="text-sm line-through dark:text-gray-600">150€</p>
						</div>
					</div>
					<div class="flex text-sm divide-x">
						<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span className='font-bold'>Remove</span>
						</button>
						<button type="button" class="flex items-center px-2 py-1 space-x-1">
						
							<span><AiFillPlusCircle className='text-xl' /> </span>
                            <span className='ml-5 font-bold'>Add</span>
						</button>
					</div>
				</div>
			</div>
		</li>
		<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div class="flex w-full space-x-2 sm:space-x-4">
				<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://merchshop.in/wp-content/uploads/2019/06/There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg"/>
				<div class="flex flex-col justify-between w-full pb-4">
					<div class="flex justify-between w-full pb-2 space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold leading-snug sm:pr-8">Black Server status Tshirt</h3>
							<p class="text-sm dark:text-gray-400">Black</p>
						</div>
						<div class="text-right">
							<p class="text-lg font-semibold">8.99€</p>
							<p class="text-sm line-through dark:text-gray-600">15.99€</p>
						</div>
					</div>
					<div class="flex text-sm divide-x">
						<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span className='font-bold'>Remove</span>
						</button>
						<button type="button" class="flex items-center px-2 py-1 space-x-1">
						
							<span><AiFillPlusCircle className='text-xl' /> </span>
                            <span className='ml-5 font-bold'>Add</span>
						</button>
					</div>
				</div>
			</div>
		</li>
	</ul>
	<div class="space-y-1 text-right">
		<p>Total amount:
			<span class="font-semibold">357 €</span>
		</p>
		<p class="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div class="flex justify-end space-x-4">
		<button type="button" class="px-6 py-2 border rounded-md bg-black text-white"onClick={toggleCart}>Back
			<span class="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" class="px-6 py-2 border rounded-md bg-black text-white dark:border-violet-400">
			<span class="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
        <button type="button" class="px-6 py-2 border rounded-md bg-black text-white dark:border-violet-400">
			<span class="sr-only sm:not-sr-only"></span>Clear Cart
		</button>
	</div>
</div>
  </div>
    </div>
  )
}

export default Navbar