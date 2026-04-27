export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DevTrack logo"
      >
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="10"
          className="fill-zinc-900 stroke-zinc-700"
          strokeWidth="2"
        />

        <path
          d="M10 12L15 17L10 22"
          className="stroke-emerald-400"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M18 22H25"
          className="stroke-emerald-400"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="font-mono text-3xl font-semibold tracking-tight">
        DevTrack
      </span>
    </div>
  );
}