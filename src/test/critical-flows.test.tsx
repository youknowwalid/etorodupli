import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

function renderApp(path = '/') {
  window.history.replaceState({}, '', path);
  return render(<BrowserRouter><App /></BrowserRouter>);
}

describe('verified local demo routes', () => {
  it('renders the public homepage and makes the sign-in boundary explicit', () => {
    renderApp('/');
    expect(screen.getByRole('heading', { name: /a window into/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/does not accept, store, or transmit passwords/i)).toBeInTheDocument();
  });

  it('opens a working public navigation menu', () => {
    renderApp('/');
    fireEvent.click(screen.getByRole('button', { name: /Trade and Invest/i }));
    expect(screen.getByRole('link', { name: 'Global markets' })).toBeInTheDocument();
  });

  it('switches the market preview tabs without inventing missing quotes', () => {
    renderApp('/');
    expect(screen.getByText('NVDA')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: 'ETFs' }));
    expect(screen.getByText(/No verified etfs quote samples/i)).toBeInTheDocument();
    expect(screen.queryByText('NVDA')).not.toBeInTheDocument();
  });

  it('renders the settings overview at the local demo route', () => {
    renderApp('/demo/settings');
    expect(screen.getByRole('heading', { name: 'Verification Centre' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Display Set your language/i })).toBeInTheDocument();
    expect(screen.getByText(/LOCAL DEMO · NOT CONNECTED/)).toBeInTheDocument();
  });

  it('filters settings cards locally without contacting a service', () => {
    renderApp('/demo/settings');
    fireEvent.change(screen.getByRole('textbox', { name: 'Search settings' }), { target: { value: 'privacy' } });
    expect(screen.getByRole('button', { name: /Privacy and Blocking/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Display/ })).not.toBeInTheDocument();
  });

  it('shows a safe explanation rather than navigating to an unaudited account page', () => {
    renderApp('/demo/settings');
    fireEvent.click(screen.getByRole('button', { name: 'Portfolio' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/does not open real account pages/i)).toBeInTheDocument();
  });
});
