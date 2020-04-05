import { clickOutside } from '@/util/clickOutside'
import CaretDown from '../../assets/icons/caretDown.png'
import CaretLeft from '@/assets/icons/caretLeft.png'

export default {
  name: 'dropdown-component',
  props: {
    styles: Object,

    options: {
      type: Array,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    onItemClick: {
      type: Function,
      required: false,
      default: () => { }
    },
    shouldUpdateState: {
      type: Boolean,
      required: false
    }
  },
  created () {
    document.addEventListener('click', this.handleOutSideClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutSideClick)
  },
  data () {
    return {
      CaretDown,
      CaretLeft,
      listOpen: false,
      listOptions: this.options
    }
  },
  watch: {
    options: function (newValue, oldValue) {
      this.listOptions = newValue
    }
  },
  directives: {
    clickOutside
  },
  methods: {
    toggleList () {
      this.listOpen = !this.listOpen
    },
    selectThisItem (item) {
      this.$emit('onItemClick', item)
      this.hideDropdown()
    },
    hideDropdown () {
      this.listOpen = false
    },
    handleCloseDropdown (otherDropdownState) {
      if (this.shouldUpdateState && this.listOpen && otherDropdownState) {
        console.log('closing main dropdown')
        this.toggleList()
      }
    }
  },
  computed: {

  }
}
