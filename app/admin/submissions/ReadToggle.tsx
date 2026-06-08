"use client";
import { useState, useTransition } from "react";
import { toggleReadAction } from "@/app/actions/admin";

export default function ReadToggle({
  id,
  initialIsRead,
}: {
  id: string;
  initialIsRead: boolean;
}) {
  const [isRead, setIsRead] = useState(initialIsRead);
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = !isRead;
    setIsRead(next);
    startTransition(() => toggleReadAction(id, next));
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      title={isRead ? "Mark as unread" : "Mark as read"}
      className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors disabled:opacity-50 ${
        isRead
          ? "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200"
          : "bg-[#D9FFDE] text-[#0B7F3B] border-[#0B7F3B] hover:bg-[#c2f5ca]"
      }`}
    >
      {isRead ? "Read" : "New"}
    </button>
  );
}
