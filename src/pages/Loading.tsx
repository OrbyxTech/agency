import { useEffect } from "react"

function Loading() {
    useEffect(
        () => {
          document.title = import.meta.env.VITE_COMPANY_NAME
        },
        []
      )
  return (
    <div className="w-full h-screen bg-gray-950 grid place-items-center">
        <p dir="ltr" className="text-7xl tracking-wide text-gray-50 loading-container">
            <span
                style={{["--delay" as any]: "1.2s", ["--duration" as any]: "1s", ["--trx" as any]: "-2rem"}}
                className="fadein-x-anim"
            >
                <span>A</span></span>
            <span
                style={{["--delay" as any]: ["1.4s" as any], ["--duration" as any]: "1s", ["--trx" as any]: "-1.6rem"}}
                className="fadein-x-anim"
            ><span>K</span></span>
            <span
                style={{["--delay" as any]: "1.6s", ["--duration" as any]: "1s", ["--trx" as any]: "-1.2rem"}}
                className="fadein-x-anim"
            ><span>E</span></span>
        </p>
    </div>
  )
}

export default Loading