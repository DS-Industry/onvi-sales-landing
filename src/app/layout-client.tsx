"use client";
import AppBanner from "@/AppBanner";

export default function LayoutClient({
                                       children
                                     }: {
  children: React.ReactNode
}) {
  return (
      <>
        {/* App Banner for Android devices */}
        <AppBanner />

        {/* This is a client component wrapper that can contain client-side logic */}
        {children}
      </>
  );
}
