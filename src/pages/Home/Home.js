import NavComponent from '@/components/Nav'
import Chip from '@/components/Chip'
import PokemonCard from '@/components/PokemonCard'
import { mapGetters } from 'vuex'
import Loader from '@/components/Loader'
export default {
  name: 'home-component',
  props: {},
  data () {
    return {
      filters: {},
      filteredPokemons: []
    }
  },
  components: {
    NavComponent,
    Chip,
    PokemonCard,
    Loader
  },
  created () {
    this.filters.region = this.$route.query.region ? this.$route.query.region : ''
    this.filters.habitat = this.$route.query.habitat ? this.$route.query.habitat : ''
    this.filters.gender = this.$route.query.gender ? this.$route.query.gender : ''
    this.filters.q = this.$route.query.q ? this.$route.query.q : ''
    this.filteredPokemons = this.filter(this.getAllpokemons)
  },
  mounted () {
    const container = this.$refs.home
    container.addEventListener('scroll', () => {
      const offsetHeight = container.offsetHeight
      if (container.scrollTop + offsetHeight >= container.scrollHeight) {
        this.$store.dispatch('GET_POKEMONS')
      }
    })
    this.$store.dispatch('GET_POKEMONS')
    this.$store.dispatch('GET_FILTER_VALUE')
  },
  computed: {
    ...mapGetters(['getAllpokemons', 'getLoader']),
    getAppliedFilters () {
      return Object.keys(this.filters).filter(filter => this.filters[filter].length > 0).map(filter => ({ [filter]: this.filters[filter] }))
    },
    shouldAppliedFilterDisplay () {
      if (this.filters.region.length > 0 || this.filters.habitat.length > 0 || this.filters.gender.length > 0 || this.filters.q.length > 0) {
        return true
      }
      return false
    }
  },
  watch: {
    getAllpokemons (val) {
      this.filteredPokemons = this.filter(val)
    }
  },
  methods: {
    filter (rawFilteredPokemons) {
      let pokemons = []
      if (!this.filters.habitat && !this.filters.region && !this.filters.q && !this.filters.gender) {
        pokemons = rawFilteredPokemons
      } else {
        if (this.filters.habitat) {
          let tempPokemons = rawFilteredPokemons.filter(p => p.habitat === this.filters.habitat)
          if (this.filters.q) {
            tempPokemons = tempPokemons.filter(p => p.name.toLowerCase() === this.filters.q.toLowerCase())
            console.log(tempPokemons, 'name')
            const x = tempPokemons.filter(p => p.id.toString() === this.filters.q)
            console.log(x, 'id')
            tempPokemons = x.length > 0 ? tempPokemons.push(...x) : tempPokemons
          }
          if (this.filters.gender) {
            tempPokemons = tempPokemons.filter(p => p.gender === this.filters.gender)
          }
          if (this.filters.region) {
            tempPokemons = tempPokemons.filter(p => p.region === this.filters.region)
          }
          pokemons = tempPokemons
        } else if (this.filters.q) {
          let tempPokemons = rawFilteredPokemons.filter(p => p.name.toLowerCase() === this.filters.q.toLowerCase())
          console.log(tempPokemons, 'name')
          const x = rawFilteredPokemons.filter(p => String(p.id) === this.filters.q)
          console.log(x, 'id')
          tempPokemons = x.length > 0 ? [...tempPokemons, ...x] : tempPokemons

          if (this.filters.gender) {
            tempPokemons = tempPokemons.filter(p => p.gender === this.filters.gender)
          }
          if (this.filters.region) {
            tempPokemons = tempPokemons.filter(p => p.region === this.filters.region)
          }
          pokemons = tempPokemons
        } else if (this.filters.gender) {
          let tempPokemons = rawFilteredPokemons.filter(p => p.gender === this.filters.gender)
          if (this.filters.region) {
            tempPokemons = tempPokemons.filter(p => p.region === this.filters.region)
          }
          pokemons = tempPokemons
        } else if (this.filters.region) {
          pokemons = rawFilteredPokemons.filter(p => p.region === this.filters.region)
        }
      }
      return pokemons
    },
    removeFilter (id) {
      this.filters[id] = ''
      this.handleAdvanceFilter(this.filters)
    },
    handleSearch (search) {
      this.filters = { ...this.filters, ...{ q: search } }
      this.handleAdvanceFilter(this.filters)
    },
    handleAdvanceFilter (filters) {
      this.$router.replace({ query: undefined })
      this.filters = { ...this.filters, ...filters }
      if (this.filters.habitat) {
        this.$router.replace({
          query: { ...this.$route.query, habitat: this.filters.habitat }
        })
      }
      if (this.filters.q) {
        this.$router.replace({
          query: { ...this.$route.query, q: this.filters.q }
        })
      }
      if (this.filters.gender) {
        this.$router.replace({
          query: { ...this.$route.query, gender: this.filters.gender }
        })
      }
      if (this.filters.region) {
        this.$router.replace({
          query: { ...this.$route.query, region: this.filters.region }
        })
      }
      this.filteredPokemons = this.filter(this.getAllpokemons)
    }
  }
}
