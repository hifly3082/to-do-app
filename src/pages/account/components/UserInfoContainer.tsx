import { Grid } from 'antd'

import { useStoreActions, useStoreState } from '../../../store'
import UserInfoFull from './UserInfoFull'

export const placeholder = 'https://avatar.iran.liara.run/public'

const { useBreakpoint } = Grid

const UserInfoContainer = () => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const logout = useStoreActions((actions) => actions.logout)
  const handleLogout = () => {
    logout()
  }

  const { md } = useBreakpoint()

  if (!isAuthenticated) return null

  return <UserInfoFull onLogout={handleLogout} />
}

export default UserInfoContainer

// const [leftPad, presetNavigation, statsManager, workoutButtons, rightPad] =
//   Children.toArray(children)
// <div className={clsx('flex w-[54rem] flex-col items-center pt-[7rem]',
//   needsSpaceForMedia ? 'h-[45%]' : 'h-[15rem]' )}
//
//   >
//    {presetNavigation}
// </div>
