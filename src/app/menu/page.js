'use client'

import { useState, useEffect } from "react";

import Cards from "../components/parents/Cards";

export default function Menu() {

    const [firstName, setFirstName] = useState("")

    useEffect(() => {
        const storedFirstName = localStorage.getItem("firstName");
        console.log("Prénom récupéré :", storedFirstName);
        if (storedFirstName) {
            setFirstName(storedFirstName.toUpperCase());
        }
    }, []);

    return (
        <main className="flex flex-col items-center mt-50">
            <h1 className="text-4xl font-extrabold text-gray-900">Adalicious 🥦</h1>
            <h3>Bonjour <em className="italic font-semibold"> {firstName} </em>, voici notre délicieux menu </h3>

            <Cards />
        </main>
    )
}