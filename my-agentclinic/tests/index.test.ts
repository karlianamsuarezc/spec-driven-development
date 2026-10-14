import { describe, it, expect } from 'vitest';
import app from '../src/index';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { Main } from '../src/components/Main';
import { Layout } from '../src/components/Layout';

describe('GET /', () => {
  it('returns 200 OK and HTML containing AgentClinic', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
    const html = await res.text();
    expect(html).toContain('AgentClinic');
  });
});

describe('Components', () => {
  it('renders Header', () => {
    const html = Header({}).toString();
    expect(html).toContain('<header');
    expect(html).toContain('AgentClinic');
  });

  it('renders Footer', () => {
    const html = Footer({}).toString();
    expect(html).toContain('<footer');
  });

  it('renders Main', () => {
    const html = Main({ children: 'test content' }).toString();
    expect(html).toContain('<main');
    expect(html).toContain('test content');
  });

  it('renders Layout', () => {
    const html = Layout({ children: 'page content' }).toString();
    expect(html).toContain('page content');
    expect(html).toContain('/static/style.css');
  });
});
