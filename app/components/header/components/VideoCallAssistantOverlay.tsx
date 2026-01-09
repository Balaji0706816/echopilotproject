import React from "react";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function VideoCallAssistantOverlay() {
  return (
    <div className="w-full bg-gray-100 dark:bg-black">

      {/* Top bar (optional / can add status or icons) */}
      <div className="mx-auto max-w-6xl flex justify-end items-center px-6 py-1 rounded-t-2xl bg-red-200">
       
       
        {/* Placeholder for future controls */}
        <div className="flex gap-4 items-center">
    

    
      {/* Wi-Fi */}
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 8.5a15 15 0 0120 0M5 11a11 11 0 0114 0M8 13.5a7 7 0 018 0M12 17a3 3 0 000-6" />
      </svg>

      {/* Search */}
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="11" cy="11" r="8" strokeWidth={2} />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth={2} strokeLinecap="round" />
      </svg>

      {/* Toggle switch */}
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="7" width="18" height="10" rx="5" ry="5" strokeWidth={2} />
        <circle cx="8" cy="12" r="3" strokeWidth={2} />
      </svg>
    </div>
      </div>

      {/* Main video call container */}
      <div className="mx-auto flex max-w-6xl justify-center py-20 rounded-b-2xl bg-gradient-to-br from-orange-200 via-pink-200 to-blue-300">

        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black">

          {/* Top Mac-style window bar */}
          <div className="flex items-center justify-between px-6 py-1 bg-gray-900 text-sm text-neutral-300">
            <div className="flex gap-2">
              <button
                aria-label="Close"
                className="w-3 h-3 rounded-full bg-red-500 border border-red-400 hover:brightness-95 transition-all"
              />
              <button
                aria-label="Minimize"
                className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-300 hover:brightness-95 transition-all"
              />
              <button
                aria-label="Maximize"
                className="w-3 h-3 rounded-full bg-green-500 border border-green-400 hover:brightness-95 transition-all"
              />
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 gap-4 p-8  ">
            <div className="flex items-center justify-center text-neutral-400 px-1">
              <video
                className="w-full  h-90 md:h-100 rounded-lg object-cover object-top"
                autoPlay
                loop
                muted
                playsInline
                src="https://www.pexels.com/download/video/6100901/"
                aria-label="Participant A video"
              />
            </div>
            <div className="flex items-center justify-center text-neutral-300">
              <video
                className="w-full  h-90 md:h-100  rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://www.pexels.com/download/video/5442623/"
                aria-label="Participant B video"
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between px-6 py-3 bg-gray-900 text-sm text-neutral-300">
            <div className="flex gap-4">
              <button className="hover:text-white">Unmute</button>
              <button className="hover:text-white">Start Video</button>
            </div>
            <button className="rounded-md bg-red-600 px-3 py-1 text-white">End</button>
          </div>

        
        </div>
      </div>
    </div>
  );
}
