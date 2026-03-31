<template>
  <div class="workspace-toggle">
    <button 
      class="toggle-button"
      :class="{ expanded: isExpanded }"
      @click="toggleExpanded"
      :aria-expanded="isExpanded"
      aria-label="展开/收缩"
    >
      <div class="button-content">
        <div class="title-section">
          <span class="title">{{ title }}</span>
        </div>
        <div class="action-section">
          <span class="text">展开/收缩</span>
          <div class="icon">
            <svg 
              class="chevron" 
              :class="{ rotated: isExpanded }"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </button>
    
    <div 
      class="content-wrapper" 
      :class="{ expanded: isExpanded }"
      ref="contentWrapper"
    >
      <div class="content" ref="content">
        <slot>
          <p>这里是可展开的内容区域。</p>
          <p>您可以在这里放置任何需要的内容。</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

// 定义 props
const props = defineProps({
  // 收缩时显示的内容高度（像素）
  collapsedHeight: {
    type: Number,
    default: 0
  },
  // 组件标题
  title: {
    type: String,
    default: '可展开内容'
  }
})

// 响应式数据
const isExpanded = ref(false)
const contentWrapper = ref(null)
const content = ref(null)

// 切换展开状态
const toggleExpanded = async () => {
  if (!isExpanded.value) {
    // 展开前设置高度
    await nextTick()
    if (content.value) {
      const height = content.value.scrollHeight
      contentWrapper.value.style.maxHeight = height + 'px'
    }
  } else {
    // 收缩时设置为指定的收缩高度
    if (contentWrapper.value) {
      contentWrapper.value.style.maxHeight = contentWrapper.value.scrollHeight + 'px'
      // 强制重绘后设置为收缩高度
      requestAnimationFrame(() => {
        contentWrapper.value.style.maxHeight = props.collapsedHeight + 'px'
      })
    }
  }
  
  isExpanded.value = !isExpanded.value
}

onMounted(() => {
  // 初始化收缩高度
  if (contentWrapper.value) {
    contentWrapper.value.style.maxHeight = props.collapsedHeight + 'px'
  }
  
  // 监听过渡结束事件
  if (contentWrapper.value) {
    contentWrapper.value.addEventListener('transitionend', () => {
      if (isExpanded.value && content.value) {
        // 展开完成后移除固定高度，允许内容自适应
        contentWrapper.value.style.maxHeight = 'none'
      }
    })
  }
})
</script>

<style scoped>
.workspace-toggle {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  transition: box-shadow 0.3s ease;
}

.workspace-toggle:hover {
}

.toggle-button {
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

.toggle-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.toggle-button:hover::before {
  left: 100%;
}



.toggle-button.expanded {
  background: var(--vp-code-block-bg);
  color: var(--vp-c-brand-1);
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}

.title-section {
  flex: 1;
  text-align: left;
}

.title {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 16px;
}

.action-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.chevron {
  width: 20px;
  height: 20px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chevron.rotated {
  transform: rotate(180deg);
}

.text {
  color: var(--vp-c-text-1);
}

.content-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--vp-c-bg-soft);
  position: relative;
}

.content-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg-soft));
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.content-wrapper:not(.expanded)::after {
  opacity: 1;
}

.content-wrapper.expanded {
  border-top: 1px solid var(--vp-c-border);
}

.content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.content p {
  margin: 8px 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .workspace-toggle {
    margin: 0 16px;
  }
  
  .toggle-button {
    padding: 12px 16px;
  }
  
  .button-content {
    font-size: 14px;
  }
  
  .content {
    padding: 20px 16px;
  }
}

/* Dark mode 优化 */
.dark .workspace-toggle {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .workspace-toggle:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.dark .toggle-button::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
}
</style>