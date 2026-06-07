interface ChartWaveProps {
  stroke?: string;
  fill?: string;
  path: string;
}

export default function ChartWave({
  stroke = "#ef4444",
  fill = "#ef4444",
  path,
}: ChartWaveProps) {
  const gradientId = `gradient-${stroke.replace("#", "")}`;

  return (
    <svg
      viewBox="0 0 300 120"
      preserveAspectRatio="none"
      className="w-100 h-100"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor={fill}
            stopOpacity="0.25"
          />
          <stop
            offset="100%"
            stopColor={fill}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      {/* Area Fill */}
      <path
        d={`${path} L300 120 L0 120 Z`}
        fill={`url(#${gradientId})`}
      />

      {/* Line */}
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}