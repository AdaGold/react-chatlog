import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import ChatEntry from './ChatEntry'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

describe('Wave 01: ChatEntry', () => {
  beforeEach(() => {
    render(
      <ChatEntry
        sender="Joe Biden"
        body="Get out by 8am.  I'll count the silverware"
        timeStamp="2018-05-18T22:12:03Z"
      />
    )
  })

  test('renders without crashing and shows the sender', () => {
    expect(screen.getByText(/Joe Biden/)).toBeInTheDocument()
  })

  test('that it will display the body', () => {
    expect(screen.getByText(/Get out by 8am/)).toBeInTheDocument()
  })

  test('that it will display the time', () => {
    expect(screen.getByText(/\d+ years ago/)).toBeInTheDocument()
  })
})

describe('Wave 03: ChatEntry Like Callback', () => {
  test('when clicked on it calls the callback function', async () => {
    const callback = jest.fn()

    render(
      <ChatEntry
        id={1}
        sender="Joe Biden"
        body="Get out by 8am.  I'll count the silverware"
        timeStamp="2018-05-18T22:12:03Z"
        liked="false"
        updateHeartCallback={callback}
      />
    )

    // Wait for it to render
    await waitFor(() => screen.getByText('🤍'))

    const button = screen.getByText('🤍')

    fireEvent.click(button)
    expect(callback).toHaveBeenCalled()
  })
})
