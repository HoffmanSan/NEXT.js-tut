'use client'

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="btn-primary"
      disabled={pending}
    >
      {pending && 'Submitting...'}
      {!pending && 'Submit'}
    </button>
  )
}