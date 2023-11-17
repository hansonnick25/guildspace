const db = require('../config/connection')
const { User, Guild } = require('../models')
const cleanDB = require('./cleanDB')

const techData = require('./techData.json')
const guildData = require('./guildData.json')

db.once('open', async () => {
  await cleanDB('Tech', 'teches')

  await User.insertMany(techData)
  await Guild.insertMany(guildData)

  console.log('Usedrs seeded!')
  process.exit(0)
})
