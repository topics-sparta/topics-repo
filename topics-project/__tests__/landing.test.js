/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LandingPage from '../app/(welcome)/(landing-page)/page'

describe('Landing Page', () => {
    it('renders sign up button', () => {
      render(<LandingPage />)
   
      const signUpButton = screen.getByRole('button', { name: "START TODAY" })
   
      expect(signUpButton).toBeInTheDocument()
    })
  })