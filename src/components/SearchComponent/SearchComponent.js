import CloseIcon from '../../assets/icons/close.svg'
export default {
  name: 'search-component',
  props: {
    placeholder: String
  },
  data () {
    return {
      value: '',
      CloseIcon
    }
  },
  computed: {
    getPlaceHolder () {
      return this.placeholder ? this.placeholder : 'Search by Name or Number'
    },
    shouldCloseIconDisplay () {
      return this.value.length > 0
    }
  },
  watch: {
    '$route.query' (val) {
      this.value = val.q ? val.q : ''
    }
  },
  created () {
    this.value = this.$route.query.q ? this.$route.query.q : ''
  },
  methods: {
    closeHandler () {
      this.value = ''
      this.searchClickHandle()
    },
    searchClickHandle () {
      this.$emit('onClick', this.value)
    }
  }
}
