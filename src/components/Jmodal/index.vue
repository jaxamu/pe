<template>
  <div class='Jmodal ' @click.stop="hidemodal">
    <div id="modalcontent" class="sxjuz zyjuz">
      <transition name="ani_bounce">
        <modalcontent v-if="Jmodal"/>
      </transition>
    </div>
  </div>
</template>

<script>
import modalcontent from './modalcontent'
import mixin from '@/components/mixins'
export default {
  name: 'Jmodal',
  components: {
    modalcontent,
  },

  filters: {},

  props: {},

  data() {
    return {}
  },
  mixins:[mixin],
  computed: {
  },

  watch: {},

  created() { 
  },

  mounted() { 
    console.log(9999)
  },
  methods: {

  },

}
</script>

<style lang="less" scoped>
.Jmodal{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.795);

#modalcontent{
  position: relative;
  height: 100%;
   font-size: 12px;
  border-radius: 6px;
  margin:  auto;
}

}
</style>
