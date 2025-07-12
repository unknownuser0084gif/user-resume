
export function Circle() {
       return (
              <svg width={100} height={100} className="border mb-12">
                     <circle cx={50} cy={50} r="30" strokeWidth={4} fill="transparent" stroke="green" />
                     <circle cx={50} cy={50} r="30" strokeWidth={4} strokeDashoffset="50" strokeLinecap="round" strokeDasharray="20" fill="transparent" stroke="red" />
              </svg>
       )
}
export function Rectangle() {
       return (
              <svg width={100} height={100} className="border mb-12">
                     <rect x="9" y="25" width="80" height="50" fill="red" />
              </svg>
       )
}
export function Square() {
       return (
              <div>svgs</div>
       )
}
export function Triangle() {
       return (
              <div>svgs</div>
       )
}
