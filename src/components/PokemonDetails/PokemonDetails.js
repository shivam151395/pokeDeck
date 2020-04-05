import OverlayComponent from '@/components/OverlayComponent'
import CardComponent from '@/components/CardComponent'
import ButtonComponent from '../Button'
export default {
  name: 'pokemon-details',
  props: {
    pokemon: Object
  },
  data () {
    return {
    }
  },
  components: {
    OverlayComponent,
    CardComponent,
    ButtonComponent
  },
  created () { },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
