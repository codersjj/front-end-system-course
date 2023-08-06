import { faker } from '@faker-js/faker'

// const namesArray = Array.from(Array(1000)).map(item => faker.person.fullName())
const namesArray = Array.from(Array(10000))
  .map(item => faker.helpers.unique(faker.person.fullName))

export default namesArray