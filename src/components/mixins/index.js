
import {
  mapGetters
} from "vuex";
const ORIGINAL_THEME = "#409EFF"; // default color
export default {
  data() {
    return {
      themeVal: ORIGINAL_THEME,
    }
  },
  created() {
  },
  watch: {
  },
  computed: {
    ...mapGetters(['Jmodal', 'userinfo','modalIndex']),
  },
  methods: {
    hidemodal() {
      this.$store.commit('SET_Jmodal', false);
    },
    openmodal(i) {
      this.$store.commit('SET_modalIndex', i);
      this.$store.commit('SET_Jmodal', true);
    }
  },
  mounted() {

  }
}
