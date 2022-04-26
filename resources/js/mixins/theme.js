export default {
  data: () => {
    return {
      isDark: JSON.parse(window.localStorage.getItem('dark')) ?? false
    }
  },
  mounted () {
    this.$data.isDark = JSON.parse(window.localStorage.getItem('dark')) ?? false
    this.$setTheme()
  },
  methods: {
    $toggleTheme () {
      this.isDark = !this.isDark
      this.$setTheme()
      window.localStorage.setItem('dark', this.$data.isDark)
    },
    $setTheme () {
      const dom = document.documentElement
      this.$data.isDark ? dom.classList.add('dark') : dom.classList.remove('dark')
    }
  }
}
