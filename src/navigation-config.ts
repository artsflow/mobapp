import { Navigation } from 'react-native-navigation'
import App from './App'

import {
  ActivitiesScreen,
  ActivityScreen,
  ArtistProfileScreen,
  SavedScreen,
  MessagesScreen,
  ProfileScreen,
} from 'screens'

export function init() {
  Navigation.registerComponent('Activities', () => App(ActivitiesScreen))
  Navigation.registerComponent('Activity', () => App(ActivityScreen))
  Navigation.registerComponent('ArtistProfile', () => App(ArtistProfileScreen))

  Navigation.registerComponent('Saved', () => App(SavedScreen))
  Navigation.registerComponent('Messages', () => App(MessagesScreen))
  Navigation.registerComponent('Profile', () => App(ProfileScreen))

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'white',
    },
    topBar: {
      title: {
        color: 'white',
      },
      backButton: {
        color: 'white',
      },
      background: {
        color: 'white',
      },
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
    },
  })

  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Activities',
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Saved',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    })
  })
}
