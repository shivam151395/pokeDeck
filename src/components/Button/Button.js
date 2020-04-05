export default {
  name: 'Button-component',
  props: {
  },
  data () {
    return {
      dars: ''
    }
  },
  watch: {

  },

  methods: {
    handleClick () {
      this.$emit('onClick', this.value)
    }
  },
  computed: {

  }
}
