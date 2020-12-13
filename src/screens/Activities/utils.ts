import { difference } from 'lodash'
import { RRuleSet, rrulestr } from 'rrule'
import { format, addMinutes, addHours } from 'date-fns'

export const getAvailableDatesMap = (rrules: string[], exdate: string[]) => {
  const rruleSet = new RRuleSet()

  rrules.forEach((r: string) => {
    const rule = rrulestr(r)
    const { dtstart } = rule.options
    const date = new Date(dtstart)
    const now = new Date(Date.now())

    date.setDate(now.getDate())
    date.setMonth(now.getMonth())

    rruleSet.rrule(rrulestr(r, { dtstart: date }))
  })

  const dates = difference(
    rruleSet.all().map((e) => e.toString()),
    exdate.map((d: string) => new Date(d)).map((e: Date) => e.toString()),
  )

  const datesMap = new Map()

  dates.forEach((date) => {
    const d = new Date(date)
    const dd = d.getDate()
    const mm = d.getMonth()
    const yy = d.getFullYear()
    const minutes = d.getMinutes()
    const hours = d.getHours()

    const datestr = new Date(yy, mm, dd).toString()
    const timestr = `${hours}:${minutes}`

    if (datesMap.has(datestr)) {
      const tmpset = datesMap.get(datestr)
      tmpset.add(timestr)
    } else {
      const tmpset = new Set()
      tmpset.add(timestr)
      datesMap.set(datestr, tmpset)
    }
  })

  return datesMap
}

export const getTimeSlot = (t: string, duration: number) => {
  const d = new Date(2020, 0, 1)
  const [hh, mm] = t.split(':')
  const from = addMinutes(addHours(d, +hh), +mm)
  const to = addMinutes(from, +duration)
  return `${format(from, 'HH:mm')} - ${format(to, 'HH:mm')}`
}

export const getFrequencyText = (rrules: string[]) => {
  return rrules.map((r) => {
    const rule = rrulestr(r)
    const hhmm = format(rule.options.dtstart, 'HH:mm')
    return `${rule.toText()} at ${hhmm}`.replace(' for 10 times', '')
  })
}
