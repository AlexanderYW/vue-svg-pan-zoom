<template>
  <div ref="content">
    <slot />
    <SvgPanZoomThumbnail v-if="has_thumbnail"
      :onThumbnailShown="onThumbnailShown"
      :mainSPZ="spz"
      :bus="bus"
    >
      <slot name="thumbnail" />
    </SvgPanZoomThumbnail>
  </div>
</template>


<script>
import svg_pan_zoom from 'svg-pan-zoom';
import props from './props';
import EventBus from './EventBus';
import SvgPanZoomThumbnail from './SvgPanZoomThumbnail.vue';
import { SvgPanZoomApi } from './SvgPanZoomApi';


export default {
  components: {
    SvgPanZoomThumbnail
  },
  props,
  computed: {
    has_thumbnail: function() {
      return this.$slots.thumbnail
    },
    options: function() {
      let options = {};
      const is_defined = k => this[k] !== undefined;

      Object.keys(props)
        .filter(is_defined)
        .forEach(k => options[k] = this[k]);

      return options;
    }
  },
  data: () => ({
    spz: null,
    bus: EventBus,
    slotEL: null
  }),
  async mounted() {
    const _this = this
    let options = {};

    Object.keys(props).filter(k => this[k] !== undefined).forEach(k => options[k] = this[k]);

    options.onZoom = (...args) => {
      _this.bus.$emit('mainZoom');
      if(_this.onZoom) _this.onZoom(args);
    };
    options.onPan = (...args) => {
      _this.bus.$emit('mainPan');
      if(_this.onPan) _this.onPan(args);
    };
    const svg = this.$refs.content.getElementsByTagName('svg')[0]
    this.spz = svg_pan_zoom(svg, options);

    this.$emit('svgpanzoom', this.spz);
  },
  methods: {
    zoom: function(v){
      this.spz.zoom(v);
    },
    zoomBy: function(v){
      this.spz.zoomBy(v);
    }
  }
};
</script>
