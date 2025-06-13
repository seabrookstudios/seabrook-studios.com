/**
 * @typedef {('18-holes'|'18-holes-putting-wind-coastlines'|'course-architect'|'victory-lap'|'dice-cricket-world-cup'|'ten-wickets'|'timber-town')} Slug
 */

/**
 * @typedef {('SBS1808'|'SBS1810'|'SBS1811'|'VLAPP01'|'DCAPP01'|'SBSCR01'|'SBSTT01')} Sku
 */

/**
 * @typedef {('game'|'expansion'|'digital'|'ios'|'android')} Tag
 */

/**
 * @typedef {object} Component
 * @typedef {string} name
 * @typedef {string} [link]
 */

/**
 * @typedef {object} Game
 * @property {Slug} slug
 * @property {string} name
 * @property {string} [edition]
 * @property {string} designer
 * @property {string} [artist]
 * @property {Sku} sku
 * @property {Sku} [parent]
 * @property {string} hook
 * @property {string} [ctaLink]
 * @property {string} [ctaText]
 * @property {Tag[]} tags
 * @property {string} players
 * @property {string} age
 * @property {string} duration
 * @property {string} year
 * @property {string} [moreInfoLink]
 * @property {string} [bggLink]
 * @property {string[]} blurb
 * @property {string[]} images
 * @property {string} [barcode]
 * @property {boolean} availableForRetail
 * @property {number} [msrpAUD]
 * @property {number} [weight]
 * @property {string} [dimensions]
 * @property {number} [msrpEuro]
 * @property {number} [msrpUSD]
 * @property {number} [msrpPound]
 * @property {number} [caseCount]
 * @property {Component[]} components
 * @property {*} [ExtraContent]
 */
