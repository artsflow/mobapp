import { getAvailableDatesMap } from './utils'

describe('util tests', () => {
  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2020-12-01T10:20:30Z').getTime())
  })

  it('should transform rrules to dates ma[', () => {
    const rrules = [
      'DTSTART:20201204T130000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=10',
      'DTSTART:20201204T090000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=10',
    ]

    const exdate = ['Fri Dec 25 2020 09:00:00 GMT+0000 (Greenwich Mean Time)']

    const received = getAvailableDatesMap(rrules, exdate)

    expect(received.get('18/12/2020')).toEqual(new Set().add('9:0'))
    expect(received.get('25/12/2020')).not.toEqual(new Set().add('9:0'))

    expect(received.get('23/12/2020')).toEqual(new Set().add('13:0'))
    expect(received.get('29/1/2021')).toEqual(new Set().add('9:0'))
  })
})
