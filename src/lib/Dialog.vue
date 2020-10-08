<template>
<template v-if="visible">
  <teleport to="body">
    <div class="po-dialog-overlay" @click="onClickOverlay"></div>
    <div class="po-dialog-wrapper">
      <div class="po-dialog" :class="classes">
        <header>
          <span class="title">{{ (form && "表单") || title }}</span>
          <span class="po-dialog-close" @click="closeDialog" />
        </header>
        <main>
          <div v-if="message">
            <Icon class="message-icon" :type="messageType" />
          </div>
          <div class="content-slot">
            <slot />
            <slot name="content" />
          </div>
          <div class="from" v-if="form">
            <label> 用户名: <input type="text" /> </label>
            <br />
            <label>
              密&nbsp;&nbsp;&nbsp;&nbsp;码: <input type="password" />
            </label>
          </div>
        </main>
        <footer>
          <Button size="tiny" @click="ok">{{ okText }}</Button>
          <Button size="tiny" @click="cancel">{{ cancelText }}</Button>
        </footer>
      </div>
    </div>
  </teleport>
</template>
</template>

<script lang="ts">
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import {
  computed,
  ref
} from "vue";

const hash = {
  info: "icon-info-circle-fill",
  warning: "icon-info-circle-fill",
  success: "icon-check-circle-fill",
  error: "icon-times-circle-fill",
};

export default {
  components: {
    Button,
    Icon,
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    title: {
      type: String,
      default: "标题"
    },
    okText: {
      type: String,
      default: "ok"
    },
    cancelText: {
      type: String,
      default: "cancel"
    },
    size: {
      type: String
    },
    form: {
      type: Boolean,
      default: false
    },
    message: {
      type: String
    },
  },
  setup(props, context) {
    const {
      size,
      message
    } = props;
    const classes = computed(() => {
      return {
        [`po-size-${size}`]: size,
        [`po-message-${message}`]: message,
      };
    });
    const messageType = ref(hash[message]);
    const closeDialog = () => {
      context.emit("update:visible", !props.visible);
    };
    const onClickOverlay = () => {
      if (props.maskClosable) {
        closeDialog();
      }
    };
    const ok = () => {
      if (!props.ok) closeDialog();
      if (props.ok && !props.ok()) closeDialog();
    };
    const cancel = () => {
      if (!props.cancel) closeDialog();
      if (props.cancel && !props.cancel()) closeDialog();
    };

    return {
      closeDialog,
      onClickOverlay,
      ok,
      cancel,
      classes,
      messageType
    };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.po-dialog {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 35em;
  max-width: 90%;
  max-height: 22em;
  display: flex;
  flex-direction: column;

  &.po-size-small {
    min-width: 25em;
  }

  &.po-size-big {
    min-width: 55em;
  }

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.2);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  >main {
    flex-grow: 1;
    padding: 12px 16px;
    overflow: auto;
  }

  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  .message-icon {
    font-size: 28px;
    padding: 0 20px 15px 20px;
    display: inline-block;
    height: 100%;
  }

  &.po-message-info {
    .title {
      visibility: hidden;
    }

    .message-icon {
      color: #40a9ff;
    }

    .content-slot {
      padding: 4px 20px 0 0;
    }

    header {
      padding: 8px 12px;
      border-color: transparent;
    }

    footer {
      border-color: transparent;
    }

    main {
      display: flex;
    }
  }

  &.po-message-warning {
    .title {
      visibility: hidden;
    }

    .message-icon {
      color: orange;
    }

    .content-slot {
      padding: 4px 20px 0 0;
    }

    header {
      padding: 8px 12px;
      border-color: transparent;
    }

    footer {
      border-color: transparent;
    }

    main {
      display: flex;
    }
  }

  &.po-message-error {
    .title {
      visibility: hidden;
    }

    .message-icon {
      color: red;
    }

    .content-slot {
      padding: 4px 20px 0 0;
    }

    header {
      padding: 8px 12px;
      border-color: transparent;
    }

    footer {
      border-color: transparent;
    }

    main {
      display: flex;
    }
  }

  &.po-message-success {
    .title {
      visibility: hidden;
    }

    .message-icon {
      color: green;
    }

    .content-slot {
      padding: 4px 20px 0 0;
    }

    header {
      padding: 8px 12px;
      border-color: transparent;
    }

    footer {
      border-color: transparent;
    }

    main {
      display: flex;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: #ffffff;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
