import rustCNLogo from '@/images/rust-cn-logo.png'
import Image from 'next/future/image'

function LogomarkPaths() {
  return (
    <Image
    src={rustCNLogo}
    alt=""
    width={24}
    height={24}
    unoptimized
  />
  )
}

// export function Logomark(props) {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
//       <LogomarkPaths />
//     </svg>
//   )
// }

export function Logo(props) {
  return (
    <LogomarkPaths viewBox="0 0 227 36" />
  )
}
