<script lang="tsx">
import { defineComponent, reactive, toRefs, watch, VNode } from 'vue';
import { routes } from '@/router'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: ['9'],
      openKeys: ['sub2','sub3'],
      preOpenKeys: ['sub3'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );

    return {
      ...toRefs(state)
    };
  },
  // render(context: any) {
  //   return  <div>
  //             <a-menu
  //               v-model={[context.openKeys,'openKeys']}
  //               v-model={[context.selectedKeys,'selectedKeys']}
  //               mode="inline"
  //               theme="dark"
  //             >
  //               <a-menu-item key="1" icon={ <PieChartOutlined /> }>
  //                 <span>Option 1</span>
  //               </a-menu-item>
  //               <a-menu-item key="2" icon={ <DesktopOutlined /> }>
  //                 <span>Option 2</span>
  //               </a-menu-item>
  //               <a-menu-item key="3" icon={ <InboxOutlined /> }>
  //                 <span>Option 3</span>
  //               </a-menu-item>
  //               <a-sub-menu key="sub1" icon={ <MailOutlined />} title={ 'Navigation One' }>
  //                 <a-menu-item key="5">Option 5</a-menu-item>
  //                 <a-menu-item key="6">Option 6</a-menu-item>
  //                 <a-menu-item key="7">Option 7</a-menu-item>
  //                 <a-menu-item key="8">Option 8</a-menu-item>
  //               </a-sub-menu>
  //               <a-sub-menu key="sub2" icon={ <AppstoreOutlined /> } title={ 'Navigation Two' }>
  //                 <a-menu-item key="9">Option 9</a-menu-item>
  //                 <a-menu-item key="10">Option 10</a-menu-item>
  //                 <a-sub-menu key="sub3" title="Submenu">
  //                   <a-menu-item key="11">Option 11</a-menu-item>
  //                   <a-menu-item key="12">Option 12</a-menu-item>
  //                 </a-sub-menu>
  //               </a-sub-menu>
  //             </a-menu>
  //           </div>;
  // },
  render() {
    function renderTree(tree: any[]):VNode {
      return  <> 
                {
                  tree.map((node: any) => {
                    if(node.children){
                        return  <a-sub-menu key={ node.name } title={ node.name }>
                                  { renderTree(node.children) }
                                </a-sub-menu>
                    }else{
                        return  <a-menu-item key={ node.name }>
                                  <router-link to={ node.path }>{ node.name }</router-link>
                                </a-menu-item>
                    }
                  })
                }
              </>
    }
    return <a-menu  mode="inline" theme="dark"> { renderTree(routes.filter((item:any) => item.path != '/')) } </a-menu>
  }
});
</script>

<!-- <template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template> -->

<!-- <script lang="tsx">
import { routes } from '@/router'
import { defineComponent, VNode } from 'vue'

export default defineComponent({
  name: 'sidebar',
  setup() {
  },
  render() {
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
</script> -->
