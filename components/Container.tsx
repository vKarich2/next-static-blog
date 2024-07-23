"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1320px] mx-auto mt-10">{children}</div>;
}
