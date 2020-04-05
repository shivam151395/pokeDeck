import SearchComponent from '@/components/SearchComponent'
import DropDown from '@/components/DropDown'
import Filters from '@/components/Filters'
export default {
  name: 'nav-component',
  props: {},
  data () {
    return {
      shouldFilterEnable: false
    }
  },
  components: {
    SearchComponent,
    DropDown,
    Filters
  },
  methods: {
    handleSearch (search) {
      this.$emit('onSearch', search)
    },
    handleFilterSelected (filters, type) {
      this.$emit('onAdvanceFilterSelected', filters)
      type !== 'clear' && this.hideAdvanceFilter()
    },
    showAdvanceFilter () {
      this.shouldFilterEnable = true
    },
    hideAdvanceFilter () {
      this.shouldFilterEnable = false
    }
  }
}
