"use client";

export default function ToolbarButton({
  onClick,
  active = false,
  children,
  title,
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-sm font-medium transition
        ${
          active
            ? "bg-emerald-600 text-white border-emerald-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
    >
      {children}
    </button>
  );
}