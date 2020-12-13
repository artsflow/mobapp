import { gql } from 'graphql-request'
import useSWR from 'swr'

const EXPLORE_ACTIVITIES = gql`
  query {
    exploreActivities {
      id
      category
      title
      description
      images
      address {
        freeformAddress
      }
      frequency {
        rrules
        exdate
      }
      duration
      capacity
      price
    }
  }
`

export function useActivitiesList() {
  const { data, error, isValidating } = useSWR(EXPLORE_ACTIVITIES)
  return { data: data?.exploreActivities, error, loading: isValidating }
}
