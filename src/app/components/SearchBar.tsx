import React from 'react';

type SearchBarProps = {
  compact?: boolean;
};

export default function SearchBar({ compact = false }: SearchBarProps) {
  return (
    <div className="flex w-full items-center justify-center gap-5">
      <input
        type="text"
        placeholder="Search..."
        className={
          compact
            ? 'min-w-0 flex-1 rounded-md border-none bg-gray-800 p-2 h-8 outline-none transition duration-300 hover:scale-[1.02]'
            : 'min-w-0 flex-1 rounded-md border-none bg-gray-800 p-2 h-8 outline-none transition duration-300 hover:scale-110'
        }
      />
      <button
        type="button"
        className={
          compact
            ? 'flex shrink-0 cursor-pointer items-center justify-center rounded-md bg-gray-800 px-4 py-2 h-8 text-white transition duration-300 hover:scale-[1.02]'
            : 'flex shrink-0 cursor-pointer items-center justify-center rounded-md bg-gray-800 px-4 py-2 h-8 text-white transition duration-300 hover:scale-110'
        }
      >
        Search
      </button>
    </div>
  );
}
