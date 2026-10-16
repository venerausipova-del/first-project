type LogoProps = {
  size?: number
}

export function Logo({ size = 24 }: LogoProps) {
  return (
    <span className="logo" style={{ width: size, height: size }} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  )
}
