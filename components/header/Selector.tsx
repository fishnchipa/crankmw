
type SelectorProps = {
  left: number,
  width: number
}

export default function Selector({left, width}: SelectorProps) {

  return (
    <svg 
      height="4" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute transition-all duration-300 bottom-0"
      style={{
        left: `${left-2}px`,
        width: `${width+10}px`,
      }}
    >
      <rect x="0" y="0" width={width} height="4" fill="white" stroke="white" transform="skewX(60)" />
    </svg>
  )
}
