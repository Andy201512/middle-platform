<script lang="tsx">
import { routes } from '@/router'
import { defineComponent, h, VNode } from 'vue'

export default defineComponent({
  name: 'sidebar',
  setup() {
  },
  render(ctx: any) {
    function renderTree(tree: any[]):VNode {
      return  <ul> 
                {
                  tree.map((node: any) => {
                    if(node.children){
                        return  <li>
                                  <router-link to={ node.path }>{ node.name }</router-link>
                                  { renderTree(node.children) }
                                </li>
                    }else{
                        return  <li>
                                  <router-link to={ node.path }>{ node.name }</router-link>
                                </li>
                    }
                  })
                }
              </ul>
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