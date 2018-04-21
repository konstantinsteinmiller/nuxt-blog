const contentful = require('contentful')

const client = contentful.createClient({
  space: 'el7fotsxhk63'/*process.env.CTF_SPACE_ID*/,
  accessToken: '8b066283565a1237746b43e72640b51d0c7e0545cfd88cc7bdaf626cdb65971a'/*process.env.CTF_ACCESS_TOKEN*/
})

module.exports = client
