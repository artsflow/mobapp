import { getAvailableDatesMap, getTimeSlot, getFrequencyText } from './utils'

describe('getAvailableDatesMap', () => {
  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2020-12-01T10:20:30Z').getTime())
  })

  it('should transform rrules to dates map', () => {
    const rrules = [
      'DTSTART:20201204T130000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=10',
      'DTSTART:20201204T090000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=10',
    ]

    const exdate = ['Fri Dec 25 2020 09:00:00 GMT+0000 (Greenwich Mean Time)']

    const received = getAvailableDatesMap(rrules, exdate)
    expect(received.get('Fri Dec 18 2020 00:00:00 GMT+0000 (Greenwich Mean Time)')).toEqual(
      new Set().add('9:0'),
    )
    expect(received.get('Fri Dec 25 2020 00:00:00 GMT+0000 (Greenwich Mean Time)')).not.toEqual(
      new Set().add('9:0'),
    )

    expect(received.get('Wed Dec 23 2020 00:00:00 GMT+0000 (Greenwich Mean Time)')).toEqual(
      new Set().add('13:0'),
    )
    expect(received.get('Fri Jan 29 2021 00:00:00 GMT+0000 (Greenwich Mean Time)')).toEqual(
      new Set().add('9:0'),
    )
  })
})

describe('getTimeSlot', () => {
  it('should transform time and duration to time slot', () => {
    const time = '13:0'
    const duration = 90

    expect(getTimeSlot(time, duration)).toEqual('13:00 - 14:30')
  })
})

describe('getFrequencyText', () => {
  it('should transform frequencty rule to text', () => {
    const rrules = [
      'DTSTART:20201204T130000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=10',
      'DTSTART:20201204T090000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=10',
    ]

    const expected = ['every week on Wednesday at 13:00', 'every week on Friday at 09:00']

    expect(getFrequencyText(rrules)).toEqual(expected)
  })
})
