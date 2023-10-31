import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
  return '3af0231c-9009-4cbb-b28f-f469f7db1b88';
  // request.user && request.user.id;
}
