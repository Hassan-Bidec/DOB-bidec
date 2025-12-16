"use client";
import dynamic from 'next/dynamic';

const CustomDetails = dynamic(() => import('./page'), { ssr: false });

export default function CustomDetailsWrapper(props) {
  return <CustomDetails {...props} />;
}
