/**
 * Security & Sanitization Utilities for Zyra Store
 * Enforces XSS prevention, URL validation, and input sanitization across client inputs.
 */

/**
 * Sanitizes text strings to prevent Cross-Site Scripting (XSS) when rendering user inputs or dynamic text.
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

/**
 * Validates external URL protocols to ensure only HTTPS or HTTP links are allowed,
 * neutralizing dangerous pseudoprotocols like javascript:, data:, or vbscript:.
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * In-Memory Client-Side Rate Limiter for Client Interactions (Search, Modals, Forms)
 * Prevents rapid-fire automated abuse or client-side Denial-of-Service.
 */
class ClientRateLimiter {
  private requests: Map<string, number[]> = new Map();

  /**
   * Checks if an action key has exceeded maxAllowed actions within timeframeMs.
   */
  public isAllowed(actionKey: string, maxAllowed: number = 10, timeframeMs: number = 5000): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(actionKey) || [];
    const validTimestamps = timestamps.filter((time) => now - time < timeframeMs);

    if (validTimestamps.length >= maxAllowed) {
      return false;
    }

    validTimestamps.push(now);
    this.requests.set(actionKey, validTimestamps);
    return true;
  }

  /**
   * Resets rate limiter memory for testing or component unmount.
   */
  public reset(actionKey?: string): void {
    if (actionKey) {
      this.requests.delete(actionKey);
    } else {
      this.requests.clear();
    }
  }
}

export const rateLimiter = new ClientRateLimiter();
