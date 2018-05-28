import React from 'react'


import Avatar from 'react-md/lib/Avatars'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import MdMenu from 'react-icons/lib/md/menu'
import MdMoveToInbox from 'react-icons/lib/md/move-to-inbox'
import MdStarBorder from 'react-icons/lib/md/star-border'
import MdArrowBack from 'react-icons/lib/md/arrow-back'
import Head from './Head'
import NavigationLink from './NavigationLink'


const avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png'

const drawerHeaderChildren = [
  <Avatar
    key={avatarSrc}
    src={avatarSrc}
    role='presentation'
    iconSized
    className={"self-center mx-1 flex-no-shrink "}
  />,
  <div className={"w-full h-full flex justify-center items-center"}>
    <p>Jose</p>
  </div>

]
export default ({ children, title = "Muser" }) => {

  return (
    <div>
      <Head title={title}/>
      <NavigationDrawer
        persistentIcon={<MdArrowBack className={"text-150"}/>}
        temporaryIcon={<MdMenu className={"text-2"}/>}
        navItems={[
          <ListItem
            key='0'
            component={NavigationLink}
            href='/'
            leftIcon={<MdMoveToInbox className={"text-150"}/>}
            tileClassName='md-list-tile--mini'
            primaryText={'Root'}
          />,
          <ListItem
            key='1'
            component={NavigationLink}
            href='/about'
            leftIcon={<MdStarBorder className={"text-150"}/>}
            tileClassName='md-list-tile--mini'
            primaryText={'About'}
          />
        ]}
        contentClassName='md-grid'
        drawerHeaderChildren={drawerHeaderChildren}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle='Sistema'
      >
        {children}
      </NavigationDrawer>
    </div>
  )
}
