/**
 * Talk with translate service
 *
 * @copyright Breword
 * @author chenyuan <cy476571@gmail.com>
 */

'use strict'

import request from '../utils/http'

// Account related

// login
export const loginApi = (loginForm) => request('sign-in', 'POST', loginForm)

// get account info.
export const getAccountInfoApi = () => request('account-info')

// log out
export const logoutApi = () => request('log-out', 'POST')


// Single pages related

// 
