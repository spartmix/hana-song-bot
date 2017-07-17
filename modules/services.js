const sair = require('./services/sair')
const entrar = require('./services/entrar')
const elogios = require('./services/elogios')
const ofensa = require('./services/ofensa')
const admin = require('./services/admin')
const stickerElogios = require('./services/stickerElogios')
const heroTips = require('./services/heroTips')
const heroSelect = require('./services/heroSelect')
const stickerOfensa = require('./services/stickerOfensa')

const defs = [
  {
    member: 'elogios',
    regex: /(bot|hana|song|dva|d.va).*(foda|bonita|z(u|o)(e|ei)ra|legal|fofa|f(a|ã)|linda|chique|interessante|bacana|fera|boa|estraordin(á|a)ria|excelente|bolada|melhor|a melhor|fod(õ|o)na|best|top|topzera)/i,
    fn: (bot, msg, match) => elogios.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'ofensa',
    regex: /(bot|hana|song|dva|d.va).*(lixo|retarda|noob|nob|inutil|demente|fdp|fdm|reatard(a|o)|d(u|o)en(te|ça)|i(z|zz)i|ez|put(a|o)|vadia|vagabund(a|o))/i,
    fn: (bot, msg, match) => ofensa.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'admin',
    regex: /hana.*(test|status)/i,
    fn: (bot, msg, match) => admin.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'stickerElogios',
    regex: /❤️|<3|S2/i,
    fn: (bot, msg, match) => stickerElogios.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'heroSelect',
    regex: /OW Dicas e Guias/i,
    fn: (bot, msg, match) => heroSelect.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'heroTips',
    regex: /(tips)/i,
    fn: (bot, msg, match, nameTip) => heroTips.execute(bot, msg, match ? match : [], nameTip),
    eval: false
  },
  {
    member: 'stickerOfensa',
    regex: /(vadia|vagabunda|puta)/i,
    fn: (bot, msg, match) => stickerOfensa.execute(bot, msg, match ? match : []),
    eval: false
  },
]

module.exports = {
  defs,
  sair,
  entrar,
  elogios,
  ofensa,
  admin,
  stickerElogios,
  heroSelect,
  heroTips,
  stickerOfensa
}