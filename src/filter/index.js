import stringFormat from './stringFormat'
export default {
  install (Vue) {
    Vue.filter('title', stringFormat.title)
  }
}
