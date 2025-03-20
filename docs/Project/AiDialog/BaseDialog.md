这个 `BaseDialog.vue` 组件是一个基于 Vue.js 的对话框组件，主要用于管理聊天界面的布局和交互。以下是对其功能和原理的详细介绍：

### 功能

1. **侧边栏组件 (`ChatAside`)**：

   - 负责显示聊天列表。
   - 可以通过 `isCollapsed` 属性控制侧边栏的收起和展开状态。
   - 通过 `@chatSelected` 事件处理器 `handleChatSelected` 来响应用户选择的聊天。

2. **聊天头部组件 (`ChatHeader`)**：

   - 仅在不是新对话时显示。
   - 负责显示当前聊天的头部信息。

3. **聊天主体组件 (`ChatMain`)**：

   - 负责显示和处理聊天内容。
   - 通过 `@addMessage` 事件处理器 `handleMessage` 来处理用户发送的消息。
   - 通过 `@createNewChat` 事件处理器 `createNewChat` 来创建新的聊天对话。

4. **侧边栏收起功能**：
   - 通过 `toggleAside` 方法切换侧边栏的收起状态。

### 原理

- **Vue 组件结构**：该组件使用了 Vue 的单文件组件格式，包含 `<template>`、`<script>` 和 `<style>` 三个部分。
- **状态管理**：

  - 使用 `ref` 来管理组件的响应式状态，如 `isNewConversation`、`newConversationId`、`selectedChatId` 和 `isAsideCollapsed`。
  - 使用 `provide` 方法将 `newConversationId` 和 `isNewConversation` 状态提供给子组件。

- **事件处理**：

  - `handleChatSelected`：处理用户选择的聊天，更新 `selectedChatId`。
  - `handleMessage`：处理用户发送的消息，通过 `chatHelper` 调用相应的处理方法。
  - `createNewChat`：创建新的聊天对话，更新 `isNewConversation` 和 `newConversationId`。

- **依赖注入**：

  - 使用 `useChatStore` 获取聊天数据的状态管理。
  - 使用 `ChatHelper` 工具类来处理聊天消息的逻辑。

- **样式**：
  - 使用 `scoped` 样式来确保样式只作用于当前组件。

这个组件通过组合多个子组件和使用 Vue 的响应式特性，实现了一个功能完整的聊天界面布局和交互逻辑。
