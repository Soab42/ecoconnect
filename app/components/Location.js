import React from "react";

export default function Location() {
  return (
    <div class="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div class="mb-2 flex items-center gap-2">
          <h2 class="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            North America
          </h2>
          <div class="relative">
            <button>
              <img
                class="size-9"
                src="/assets/icons/link.svg"
                alt="link icon"
              />
            </button>
            <div class="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2 invisible">
              <ul
                role="list"
                class="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
              >
                <li>Kolkata</li>
                <li>Dhaka</li>
                <li>London</li>
                <li>Amsterdam</li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-lg text-[#C4C4C4] lg:text-xl">
          United States of America | California
        </p>
        <div class="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>2:24 PM</span> <span>Monday, 12 February 2024</span>
        </div>
      </div>
    </div>
  );
}
