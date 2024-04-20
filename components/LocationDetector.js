"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("lat", position.coords.latitude);
        params.set("lon", position.coords.longitude);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [searchParams, router]);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="300"
          height="400"
          viewBox="0 0 81.995 125.84"
          className="animate-bounce"
        >
          <defs>
            <filter
              id="Polygon_1"
              x="0"
              y="41.719"
              width="81.995"
              height="84.121"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="11" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="Ellipse_2"
              x="8.5"
              y="8.5"
              width="62"
              height="62"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="7" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="4.5" result="blur-2" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Component_1_1"
            data-name="Component 1 – 1"
            transform="translate(7)"
          >
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="32.5"
              cy="32.5"
              r="32.5"
              fill="#0c0751"
            />
            <g transform="matrix(1, 0, 0, 1, -7, 0)" filter="url(#Polygon_1)">
              <path
                id="Polygon_1-2"
                data-name="Polygon 1"
                d="M26.46,8.967a5,5,0,0,1,8.948,0l22.852,45.8A5,5,0,0,1,53.786,62H8.083a5,5,0,0,1-4.474-7.232Z"
                transform="matrix(-1, 0.03, -0.03, -1, 72.99, 103.68)"
                fill="#0c0751"
              />
            </g>
            <g transform="matrix(1, 0, 0, 1, -7, 0)" filter="url(#Ellipse_2)">
              <circle
                id="Ellipse_2-2"
                data-name="Ellipse 2"
                cx="17.5"
                cy="17.5"
                r="17.5"
                className="animate-pulse"
                transform="translate(22 15)"
                fill="#76e9b3"
              />
            </g>
          </g>
        </svg>
      </div>
      <h1 className="text-3xl animate-pulse capitalize font-black  p-2">
        location detecting...
      </h1>
    </div>
  );
}
