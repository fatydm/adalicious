'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Button from "./components/ui/Button";

export default function LandingPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("")

  localStorage.setItem("firstName", firstName)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Merci d'entrer ton prénom !");
      return
    }
  }

    return (

      <main className="flex flex-col items-center mt-50">
        <h1 className="text-5xl ">🥦</h1>
        <h2 className="flex items-center">Bienvenue sur Adalicious</h2>
        <p className="pb-5">pour commencer, peux-tu me donner ton prénom : </p>
        <form  onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            required
            type="text"
            placeholder="Tape ton prénom ici"
            className="border p-2 rounded mb-2 w-full"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Button
            classes="bg-(--button-background)"
            type="button"
            onClick={() => { router.push('/menu') }}
            text="Valider"
          />
        </form>
      </main>

    )
  }