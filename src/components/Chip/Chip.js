import closeIcon from '../../assets/icons/closeWhite.png'
export default {
  name: 'Button-component',
  props: {
    content: String,
    id: String
  },
  data () {
    return {
      closeIcon
    }
  },
  watch: {

  },

  methods: {
    closeChip () {
      this.$emit('removeFilter', this.id)
    }
  },
  computed: {

  }
}
