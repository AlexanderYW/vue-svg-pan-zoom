<template>
    <div>
        <input type="button" value="center me" @click="center" />
        <svg-pan-zoom style="width: 500px; height: 500px; border:1px solid black;"
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true"
            @svgpanzoom="registerSvgPanZoom"
        >
          <raw-tiger v-slot:default="{}" />
        </svg-pan-zoom>
    </div>
</template>

<script>
import RawTiger from './RawTiger.vue';
import SvgPanZoom from './index';

export default {
  title: 'Event',
  components: { SvgPanZoom, RawTiger },
  data: () => ({ svgpanzoom: null }),
  methods: {
    registerSvgPanZoom(svgpanzoom) {
      this.svgpanzoom = svgpanzoom;
    },
    center() {
      if( !this.svgpanzoom ) return;

      this.svgpanzoom.center();
    }
  },
};
</script>
