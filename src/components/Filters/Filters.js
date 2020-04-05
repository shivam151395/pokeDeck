import OverlayComponent from '@/components/OverlayComponent'
import CardComponent from '@/components/CardComponent'
import DropDown from '@/components/DropDown'
import CloseIcon from '../../assets/icons/close.svg'
import ButtonComponent from '../Button'
import { mapGetters } from 'vuex'
export default {
  name: 'nav-component',
  props: {},
  data () {
    return {
      CloseIcon,
      filters: {
        habitat: [],
        region: [],
        gender: []
      },
      selectedFilters: {
        habitat: '',
        region: '',
        gender: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getFilters'])
  },
  watch: {

    getFilters (val) {
      this.filters.habitat = val.habitats
      this.filters.region = val.regions
      this.filters.gender = val.genders
    }
  },
  components: {
    OverlayComponent,
    CardComponent,
    DropDown,
    ButtonComponent
  },
  created () {
    this.filters.habitat = this.getFilters.habitats.map(h => ({ type: h, title: h }))
    this.filters.region = this.getFilters.regions.map(h => ({ type: h, title: h }))
    this.filters.gender = this.getFilters.genders
    this.selectedFilters.region = this.$route.query.region ? this.$route.query.region : ''
    this.selectedFilters.habitat = this.$route.query.habitat ? this.$route.query.habitat : ''
    this.selectedFilters.gender = this.$route.query.gender ? this.$route.query.gender : ''
  },
  methods: {
    filterSelectionHandler (item, type) {
      if (type === 'region') {
        this.selectedFilters.region = item.title
      } else {
        this.selectedFilters.habitat = item.title
      }
    },
    closeHandler () {
      this.$emit('close')
    },
    clearFilter () {
      this.selectedFilters = {
        habitat: '',
        region: '',
        gender: ''
      }
      this.$emit('resetFilter', this.selectedFilters)
    },
    applyFilter () {
      this.$emit('onFilterSelected', this.selectedFilters)
    },
    showAdvanceFilter () {
      this.shouldFilterEnable = true
    }
  }
}
