<template>
  <div>
    <div :id="id" class="ezu_sxj"></div>
  </div>
</template>

<script>
import EZUIKit from 'ezuikit-js'

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  mounted: () => {
    console.group('mounted 组件挂载完毕状态===============》')
    this.initVideo()
  },
  methods: {
    initVideo() {
      var _this = this
      var player = new EZUIKit.EZUIKitPlayer({
        autoplay: true,
        id: _this.id,
        accessToken: 'at.5eust80k28pq5i8w7blbhl8e4vft3bwq-7slhtrs9dm-1fhprbb-tafuv0h5j',
        url: 'ezopen://open.ys7.com/203751922/1.live',
        template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
        width: 600,
        height: 400
      })
      console.log('player', player)
    }
  }
}
</script>
<style lang="scss" scoped>
.ezu_sxj{
  width: 350px;
  height: 350px;
}
</style>

