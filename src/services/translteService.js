/**
 * Define apis to talk with translate service
 *
 * @copyright Breword
 * @author chenyuan <cy476571@gmail.com>
 */

'use strict'

import request from '../utils/http'

// Account related

// create account
export const createAccountApi = (accountInfo) => {
  return request('/create-account', 'POST', accountInfo)
}

// login
export const loginApi = (loginForm) => request('/sign-in', 'POST', loginForm)

// get account info.
export const getAccountInfoApi = () => request('/account-info')

// log out
export const logoutApi = () => request('/log-out', 'POST')


// Single pages related

/**
 * get page list, contains search keyword
 * @param {Object} payload {
 *    'page': 2,
 *    'count': 10,
 *    'query': 'hello', optional
 * }
 */
export const getPageListApi = (payload) => request('/page-list', 'GET', payload)

/**
 * send url to translate the page or get page meta data.
 * @param {Object} data :
 * {
 *    'url': 'http://breword.com',
 *    'source_lang': 'en',
 *    'target_lang': 'zh-CN'
 * }
 * OR
 * {
 *    'id': 12345 
 * }
 *
 */
export const translatePageApi = (data) => request(`/translate-page`, 'POST', data)

/**
 * Alias of translatePage.
 * TODO: if get page meta data is needed indeed?
 * @param {pageId} pageId id of target page
 */
// export const getPageMetadataApi = (pageId) => translatePage(pageId)

/**
 * get single page html source
 * @param {Number} pageId target page id
 */
export const getPageSourceApi = (pageId) => request(`/pages${pageId}`)

/**
 * submit page keywords, 
 * @param {Array} keywords  page keywords to submit
 * @param {Number} pageId    the target page 
 * {
 *    'keywords': [
 *      {
 *         'en_text': 'hello',
 *         'zh-CN_text': '欢迎'
 *      }
 *    ]
 * }
 */
export const submitPageKeywordsApi = (pageId, keywords) => {
 return request(`/pages/${pageId}/keywords`, 'POST', keywords)
}

/**
 * update translation for severral sentences
 * @param {Number} pageId target page
 * @param {Array} sentences a list of sentences to update
 * {
 *    'sentences': [
 *      {
 *          'id': 123,
 *          'target_lang_text': 'welcom'
 *      }
 *    ] 
 * }
 */
export const updatePageTranslationApi = (pageId, sentences) => {
  return request(`/pages/${pageId}/translation`, 'PUT', sentences)
}


// Whole website related

/**
 * get website list, contains search keyword
 * @param {Object} payload {
 *    'page': 2,
 *    'count': 5,
 *    'query': 'hello', optional
 * }
 */
export const getWebsiteListApi = (payload) => {
  return request('/website-list', 'GET', payload)
}

/**
 * translate all pages of a website
 * @param {Object} siteInfo website meta data
 * {
 *    'url': 'http://breword.com',
 *    'source_lang': 'en',
 *    'target_lang': 'zh-CN'
 * }
 */
export const translateWebsite = (siteInfo) => {
  return request('/translate-website', 'POST', siteInfo)
}
