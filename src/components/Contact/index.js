import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [emailError, setEmailError] = useState('')
  const [formError, setFormError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Email format validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
  }

  // Function to verify email existence using Hunter.io API
  const checkEmailExists = async (email) => {
    const apiKey = '4e65a01e412f59e5dfa9d30358ba8eec4b32abb4' // Replace with your Hunter.io API key
    try {
      const response = await fetch(
        `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`
      )
      const data = await response.json()
      return data.data.status === 'valid'
    } catch (error) {
      console.error('Email verification error:', error)
      return false
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setEmailError('')
    setFormError('')
    setIsLoading(true)

    const formData = new FormData(form.current)
    const email = formData.get('email').trim()

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
      setIsLoading(false)
      return
    }

    const emailExists = await checkEmailExists(email)
    if (!emailExists) {
      setEmailError('This email address does not appear to exist.')
      setIsLoading(false)
      return
    }

    emailjs
      .sendForm('service_1lygs05', 'template_vkgxy64', form.current, {
        publicKey: 'RafiJSnhYy7YcEhE7',
      })
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.error('Email send error:', error)
          setFormError('Failed to send the message, please try again.')
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Feel free to get in touch! Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                required
              />
              {emailError && <small className="error-message">{emailError}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Let me know how I can help you"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'SEND'}
            </button>
            {formError && <p className="error-message">{formError}</p>}
          </form>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Contact
