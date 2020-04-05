import closeIcon from '../../assets/icons/closeWhite.png'
import PokemonDetails from '@/components/PokemonDetails'
export default {
  name: 'Pokemons-component',
  props: {
    pokemon: Object
  },
  data () {
    return {
      closeIcon,
      shouldShowCardDetails: false
    }
  },
  watch: {

  },

  methods: {
    showCardDetails () {
      this.shouldShowCardDetails = true
    },
    closeChip () {
      this.$emit('removeFilter', this.id)
    }
  },
  components: {
    PokemonDetails
  }
}
