"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function Error(error) {
  const params = useParams();
  return (
    <Card>
      <h2 className="text-xl font-bold text-white ">
        Can not find any location info for
        <span className="text-rose-400"> {params.location}</span>.
      </h2>
      <div className="mt-10 p-1 ring-1 text-center rounded-full hover:bg-blue-300/20">
        <Link className="text-blue-400 mt-10" href={"/"}>
          go back to current location
        </Link>
      </div>
    </Card>
  );
}
