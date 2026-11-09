import { ArrowUpRight } from "lucide-react";
import React from 'react';

export default function LinkArrow({ children, href = '#collection' ,className}) {
  return <a className={`text-link ${className}`} href={href}>{children}<ArrowUpRight size={12} strokeWidth={1.7} /></a>;
}