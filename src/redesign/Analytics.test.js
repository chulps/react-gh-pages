import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { HashRouter, useNavigate } from 'react-router-dom';
import Analytics from './Analytics';

function TestLinks() {
  const navigate = useNavigate();
  return <><button onClick={() => navigate('/projects/')}>Open projects</button><a href="mailto:hello@example.com?subject=Website%20project">Email about a website</a><a href="mailto:hello@example.com?subject=Product%20Designer%20role">Email about a role</a></>;
}

test('tracks current-site route views and contact intent without sending personal details', async () => {
  window.location.hash = '#/';
  window.gtag = jest.fn();
  render(<HashRouter><Analytics/><TestLinks/></HashRouter>);

  await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({
    page_path: expect.stringContaining('#/'),
    page_location: expect.stringContaining(window.location.origin),
  })));

  fireEvent.click(screen.getByRole('button', { name: 'Open projects' }));
  await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({
    page_path: expect.stringContaining('#/projects/'),
  })));

  fireEvent.click(screen.getByRole('link', { name: 'Email about a website' }));
  expect(window.gtag).toHaveBeenCalledWith('event', 'business_contact_click', {
    contact_type: 'business',
    transport_type: 'beacon',
  });
  expect(window.gtag.mock.calls.find((call) => call[1] === 'business_contact_click')[2]).not.toHaveProperty('email');

  fireEvent.click(screen.getByRole('link', { name: 'Email about a role' }));
  expect(window.gtag).toHaveBeenCalledWith('event', 'recruiting_contact_click', {
    contact_type: 'recruiting',
    transport_type: 'beacon',
  });
});
