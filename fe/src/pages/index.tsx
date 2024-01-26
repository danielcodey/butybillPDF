'use-client'

import { useState } from "react"

export default function Home() {
  const [msg, setMsg] = useState("Hi World")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{ msg }</p>
      <button onClick={() => setMsg("Hello World")}>Button</button>
    </main>
  )
}
