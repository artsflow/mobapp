import { gql } from 'graphql-request'
import useSWR from 'swr'

const EXPLORE_ART_ACTIVITIES = gql`
  query {
    explore {
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
      price
    }
  }
`

export function useExplore() {
  const { data, error, isValidating } = useSWR(EXPLORE_ART_ACTIVITIES)
  return { data: data?.explore, error, loading: isValidating }
}
