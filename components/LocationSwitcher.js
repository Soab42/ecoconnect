"use client";

import { getLocationLatLong } from "@/lib/get-location";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define a debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

export default function LocationSwitcher(props) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const [locationList, setLocationList] = useState([]);
  // Debounce the handleChange function
  const debouncedSearch = debounce(async (value) => {
    const data2 = await getLocationLatLong(value);
    setLocationList(data2);
  }, 500);

  const handleClick = (country) => {
    setActive(false);
    router.push(
      `/${country.country.toLowerCase()}?lat=${country.latitude}&lon=${
        country.longitude
      }`
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;
    debouncedSearch(value);
  };
  return (
    <div className="relative">
      <button onClick={() => setActive(!active)}>
        <Image
          width={100}
          height={50}
          className="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
        />
      </button>
      <div
        className={`absolute left-0 top-12 z-[999]  min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2 duration-500 ${
          active ? "w-full" : "scale-0 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <ul
          role="list"
          className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer [&>li]:ring-1 max-h-96 overflow-y-scroll"
        >
          <div className="flex sticky top-0 bg-white">
            <input
              type="text"
              className="ring-1 w-full mx-1 rounded-md h-10 pl-2 "
              placeholder="Type your location name"
              onChange={handleChange}
            />
            <svg
              id="Component_2_1"
              data-name="Component 2 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="53.49"
              viewBox="0 0 48.389 53.49"
              className="absolute right-2 top-0 pointer-disabled"
            >
              <g
                id="Ellipse_3"
                data-name="Ellipse 3"
                transform="translate(34.078 23.74)"
                fill="#fff"
                stroke="#130404"
                stroke-width="1"
              >
                <circle cx="0.5" cy="0.5" r="0.5" stroke="none" />
                <circle cx="0.5" cy="0.5" fill="none" />
              </g>
              <g
                id="Path_1"
                data-name="Path 1"
                transform="translate(27.833 33.785) rotate(-40)"
                fill="#fff"
              >
                <path
                  d="M 2.5 25.22295761108398 C 1.322952628135681 25.22295761108398 0.5022071599960327 24.61537551879883 0.5000051259994507 24.06917381286621 L 0.7591403126716614 0.2705672681331635 C 1.16709566116333 0.3295409679412842 1.762220621109009 0.3892282247543335 2.5 0.3892282247543335 L 4.744806289672852 0.3892282247543335 L 4.500030040740967 24.06178855895996 L 4.5 24.06437873840332 L 4.5 24.06695747375488 C 4.5 24.61372756958008 3.678630113601685 25.22295761108398 2.5 25.22295761108398 Z"
                  stroke="none"
                />
                <path
                  d="M 1.253048658370972 0.8318443298339844 L 1.000030994415283 24.06947898864746 C 1.004629135131836 24.26141738891602 1.529921770095825 24.72295761108398 2.5 24.72295761108398 C 3.47435998916626 24.72295761108398 4 24.25732803344727 4 24.06694793701172 L 4 24.0617790222168 L 4.000050067901611 24.05660820007324 L 4.239603042602539 0.8892288208007813 L 2.5 0.8892288208007813 C 2.025903940200806 0.8892288208007813 1.606209516525269 0.8650836944580078 1.253048658370972 0.8318443298339844 M 0.265620231628418 -0.3281211853027344 C 0.265620231628418 -0.3281211853027344 1.119289875030518 -0.1107711791992188 2.5 -0.1107711791992188 C 3.880710124969482 -0.1107711791992188 5.25 -0.1107711791992188 5.25 -0.1107711791992188 L 5 24.06694793701172 C 5 24.98153877258301 3.880710124969482 25.72295761108398 2.5 25.72295761108398 C 1.119289875030518 25.72295761108398 0 24.98153877258301 0 24.06694793701172 L 0.265620231628418 -0.3281211853027344 Z"
                  stroke="none"
                  fill="#130404"
                />
              </g>
              <g
                id="Ellipse_4"
                data-name="Ellipse 4"
                transform="translate(0 19.284) rotate(-40)"
                fill="#fff"
                stroke="#130404"
                stroke-width="1.5"
              >
                <circle cx="15" cy="15" r="15" stroke="none" />
                <circle cx="15" cy="15" r="14.25" fill="none" />
              </g>
            </svg>
          </div>
          {locationList?.slice(0, 5).map((country) => (
            <li key={country.country} onClick={() => handleClick(country)}>
              {country.country}
            </li>
          ))}
          <li onClick={() => handleClick(props)}>
            {decodeURIComponent(props.location)}
          </li>
        </ul>
      </div>
    </div>
  );
}
