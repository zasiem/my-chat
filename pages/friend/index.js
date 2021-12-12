export default function Friend() {
    return (
        <>
            <div class="py-10 h-screen bg-gray-300 px-2">
                <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
                    <div class="md:flex">
                        <div class="w-full p-4">
                            <div class="relative">
                                <input type="text" class="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..." />
                                <i class="fa fa-search absolute right-3 top-4 text-gray-300"></i>
                            </div>
                            <ul>
                                <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                    <div class="flex ml-2">
                                        <div class="flex flex-col ml-2"> <span class="font-medium text-black">Patrick Koeler</span> <span class="text-sm text-gray-400 truncate w-32">May be yes</span> </div>
                                    </div>
                                    <div class="flex flex-col items-center"> <span class="text-gray-300">3:26</span> <i class="fa fa-star text-green-400"></i> </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

