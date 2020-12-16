import { Navigation } from 'react-native-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import App from './App'

import {
  ActivitiesScreen,
  ActivityScreen,
  ArtistProfileScreen,
  SavedScreen,
  MessagesScreen,
  ProfileScreen,
} from 'screens'

import { Modal } from 'components'

const Screens = new Map()

Screens.set('Activities', ActivitiesScreen)
Screens.set('Activity', ActivityScreen)
Screens.set('ArtistProfile', ArtistProfileScreen)
Screens.set('Saved', SavedScreen)
Screens.set('Messages', MessagesScreen)
Screens.set('Profile', ProfileScreen)
Screens.set('Modal', Modal)

export async function init() {
  Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => App(C))
  })

  const [ActivitiesIcon, SavedIcon, MessagesIcon, ProfileIcon] = await Promise.all([
    MaterialIcons.getImageSource('explore', 24),
    SimpleLineIcons.getImageSource('heart', 24),
    AntDesign.getImageSource('message1', 24),
    FontAwesome.getImageSource('user-circle', 24),
  ])

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'white',
    },
    topBar: {
      title: {
        color: 'black',
      },
      backButton: {
        color: 'black',
      },
      background: {
        color: 'white',
      },
    },
    bottomTabs: {
      backgroundColor: '#F0F0F0',
      hideShadow: true,
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
      selectedTextColor: 'black',
      selectedIconColor: 'black',
      textColor: 'grey',
      iconColor: 'grey',
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
                      id: 'Activities',
                      name: 'Activities',
                      options: {
                        topBar: {
                          noBorder: true,
                          title: { text: 'Activities' },
                        },
                        bottomTab: {
                          text: 'Activities',
                          icon: ActivitiesIcon,
                        },
                      },
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
                      options: {
                        topBar: {
                          noBorder: true,
                          title: { text: 'Saved' },
                        },
                        bottomTab: {
                          text: 'Saved',
                          icon: SavedIcon,
                        },
                      },
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
                      name: 'Messages',
                      options: {
                        topBar: {
                          noBorder: true,
                          title: { text: 'Messages' },
                        },
                        bottomTab: {
                          text: 'Messages',
                          icon: MessagesIcon,
                        },
                      },
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
                      name: 'Profile',
                      options: {
                        topBar: {
                          noBorder: true,
                          title: { text: 'Profile' },
                        },
                        bottomTab: {
                          text: 'Profile',
                          icon: ProfileIcon,
                        },
                      },
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
