<script lang="ts">
import { routes } from '@/router'
import { defineComponent, h, VNode } from 'vue'

export default defineComponent({
  name: 'sidebar',
  setup() {
  },
  render(ctx: any) {
    function renderTree(tree: any[]):VNode {
      return h('ul', tree.map((node: any) => {
          if(node.children){
              return h('li', {}, [h('a', {href: node.path}, node.name), renderTree(node.children)])
          }else{
              return h('li', h('a', {href: node.path}, node.name))
          }
      }))
  }
    return renderTree(routes.filter((item:any) => item.path != '/'))
  }
})
</script>

<!-- <template>
  <ul>
    <li v-for="item in routes"><router-link :to="item.path">{{ item.name }}</router-link></li>
  </ul>
</template>

<style scoped>
</style> -->