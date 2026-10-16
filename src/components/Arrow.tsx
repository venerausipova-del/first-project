type ArrowProps = {
  direction?: 'left' | 'right'
}

export function Arrow({ direction = 'right' }: ArrowProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}
    >
      <path
        d="M2.343 8h11.314M9.061 3.747 13.657 8l-4.596 4.253"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
