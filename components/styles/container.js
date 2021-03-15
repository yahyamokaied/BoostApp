
export const cover = {
  height: '100%',
  width: '100%',
}

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
}
export const rowBetween = {
  justifyContent: 'space-between',
  flexDirection: 'row'
}
export const row = {
  flexDirection: 'row'
}
export const loginContainer = {
  flex: 1,
  ...cover,
  ...center,
}

export const homeMainContainer = {
  flex: 1,
  ...cover,
  ...center,
}
export const competitionInfoContainer = {
  paddingVertical: '1%',
  paddingHorizontal: '5%',
  ...rowBetween
}
export const competitionInfoContainerChild = {
  paddingVertical: '1%',
  paddingHorizontal: '5%',
  ...row
}
export const competitionCountdownText = {
  flex: 1,
  padding: 22,
  width: '100%',
  textAlign: 'center'
}
export const stepStarContainer = {
  borderWidth:0.5,
  borderRadius: 5,
  padding: 5,
  width: '90%',
  alignItems: 'center',
  alignSelf:'center'
}

export const profileImageContainer = {
  width: '100%',
  height: 300,
  position:'absolute',
  top:0,
  right:0
}
