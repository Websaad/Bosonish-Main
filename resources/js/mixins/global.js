export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    $extractGetParams (url = location.href, param) {
      const newUrl = new URL(url)
      const page = newUrl.searchParams.get(param)
      return page
    },
    $getParams (param, url = location.href) {
      const newUrl = new URL(url)
      const page = newUrl.searchParams.get(param)
      return page
    },
    $slugify (string) {
      return string ? (string.replace(/\s\s+/g, ' ').toLowerCase().split(' ').join('-')).trim() : ''
    },
    $getPropByString (obj, path) {
      if (!path) return obj
      const properties = path.split('.')
      return this.$getPropByString(obj[properties.shift()], properties.join('.'))
    },
    $dateFormat($rawDate, $format = 'DD/MM/YYYY') {
      if (!$rawDate) return ''
      const date = new Date($rawDate)
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()
      return $format.replace('MM', month < 10 ? '0' + month : month).replace('DD', day < 10 ? '0' + day : day).replace('YYYY', year)
      // var date = new Date(date)
      // var result = date.toLocaleDateString("en-US", { // you can use undefined as first argument
      //     year: "numeric",
      //     month: "2-digit",
      //     day: "2-digit",
      // });
      // return result;
    }
  }

}
