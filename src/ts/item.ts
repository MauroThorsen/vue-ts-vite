// eslint-disable-next-line no-shadow,no-unused-vars
enum unit {
  // eslint-disable-next-line no-unused-vars
  absolute = 'absolute'
}
interface domFunc {
  move(): boolean
}
let divCount: number = 0
class Div implements domFunc {
  protected id: number

  protected width: number

  protected height: number

  protected top: number

  protected left: number

  protected right: number

  protected bottom: number

  protected backgroundColor: string

  protected unit: string

  constructor(
    width?: number,
    height?: number,
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
  ) {
    this.width = width || 100
    this.height = height || 100
    divCount += 1
    this.id = divCount
    this.top = top || 0
    this.left = left || 0
    this.right = right || 0
    this.bottom = bottom || 0
    this.backgroundColor = '#000'
    this.unit = unit.absolute
  }

  move = (): boolean => {
    console.log('div move')
    return true
  }

  render = (): boolean => {
    try {
      const div = document.createElement('div')
      div.innerHTML = 'created through ts '
      div.id = `created-${this.id}`

      const bo = document.body // 获取body对象.
      // 动态插入到body中
      bo.insertBefore(div, bo.lastChild)
      return true
    } catch (e) {
      return false
    }
  }
}
export default Div
