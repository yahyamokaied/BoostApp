//parts
export const small = {
  fontSize: 14
}
export const medium = {
  fontSize: 18
}

export const large = {
  fontSize: 32
}
export const bold = {
  fontWeight: 'bold'
}

export const opacity = {
  opacity: 0.8
}
export const smallOpacity = {
  ...small,
  ...opacity,
}
export const smallBold = {
  ...small,
  ...bold
}
export const mediumBold = {
  ...bold,
  ...medium
}
export const largeBold = {
  ...large,
  ...bold
}
