function resize() {
  /**
   * 设备屏幕宽度
   */
  const deviceWidth = document.documentElement.clientWidth
  /**
   * 3840 宽度下，基准为 100px
   */
  document.documentElement.style.fontSize = deviceWidth / 38.4 + 'px'
  const scale = deviceWidth / 3840
  window.sessionStorage.setItem('scale', scale)
}
resize()
window.addEventListener('resize', resize)